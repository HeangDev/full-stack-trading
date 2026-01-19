<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BankController;

Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);

Route::middleware("auth:sanctum")->group(function () {
    Route::resource('user', UserController::class);
    Route::resource('permission', PermissionController::class);
    Route::resource('role', RoleController::class);

    Route::resource('bank', BankController::class)->only([
        "index", "store", "update", "destroy"
    ]);

    Route::post("/change_password", [AuthController::class, "changePassword"]);
    Route::post("/logout", [AuthController::class, "logout"]);
    Route::get('/me', [AuthController::class, 'me']);
});