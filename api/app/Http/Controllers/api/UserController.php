<?php

namespace App\Http\Controllers\api;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
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
            "referral_code" => strtoupper(Str::random(6)),
            "referrer_by_id" => $referrer?->id,
            "register_ip" => $request->ip()
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

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

        // ✅ Update last login info
        $user->update([
            'last_login_at' => Carbon::now(),
            'last_login_ip' => $request->ip(),
        ]);

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

    public function changePassword(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
        ]);

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Current password is incorrect'], 400);
        }

        $user->update([
            'password' => Hash::make($request->new_password)
        ]);

        return response()->json([
            'message' => 'Password updated successfully',
        ], 200);
    }
}
