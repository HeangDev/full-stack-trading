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
            'country_code' => 'required|string|max:5',
            "phone_number" => "required|string|unique:users,phone_number",
            "username" => "required|string|unique:users,username",
            "password" => "required|string|min:6",
            "referral_code" => "nullable|string",
        ]);

        $referrer = null;
        if (!empty($data['referral_code'])) {
            $referrer = User::where('referral_code', $data['referral_code'])->first();
        }

        $user = User::create([
            "country_code" => $request->country_code,
            "phone_number" => $request->phone_number,
            "username" => $request->username,
            "password" => Hash::make($request->password),
            'referral_code' => uniqid('REF_'), // generate unique referral code
            'referrer_id' => $referrer?->id,
        ]);

        $token = $user->createToken("auth_token")->plainTextToken;

        return response()->json([
            "token" => $token,
            "token_type" => "Bearer",
            "user" => $user,
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            "country_code" => "required|string",
            "phone_number" => "required|string",
            "password" => "required|string",
        ]);

        $user = User::where("country_code", $request->country_code)
            ->where("phone_number", $request->phone_number)
            ->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                "phone_number" => ["The provided credentials are incorrect."],
            ]);
        }

        $token = $user->createToken("auth_token")->plainTextToken;

        return response()->json([
            "token" => $token,
            "token_type" => "Bearer",
            "user" => $user,
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
