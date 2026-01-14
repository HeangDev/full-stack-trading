<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            "phone_number" => "required|string|unique:users,phone_number",
            "username" => "required|string|unique:users,username",
            "password" => "required|string|min:6|confirmed",
            "withdrawal_code" => "required|string|min:6",
            "referral_code" => "nullable|string|exists:users,referral_code",
        ]);

        $user = User::create([
            "phone_number" => $request->phone_number,
            "username" => $request->username,
            "password" => Hash::make($request->password),
            "withdrawal_code" => Hash::make($request->withdrawal_code),
            "referral_code" => strtoupper(substr(md5(uniqid(rand(), true)), 0, 8)),
            "referred_by" => $request->referral_code ? User::where('referral_code', $request->referral_code)->first()->id : null,
        ]);

        $token = $user->createToken("auth_token")->plainTextToken;

        return response()->json([
            "user" => $user,
            "token" => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            "phone_number" => "required|string",
            "password" => "required|string",
        ]);

        $user = User::where("phone_number", $request->phone_number)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                "phone_number" => ["The provided credentials are incorrect."],
            ]);
        }

        $token = $user->createToken("auth_token")->plainTextToken;

        return response()->json([
            "user" => $user,
            "token" => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "Successfully logged out",
        ]);
    }

    public function me(Request $request)
    {
        return response()->json($request->user());
    }
}
