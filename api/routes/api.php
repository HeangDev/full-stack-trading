<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\BankController;

Route::post("/register", [UserController::class, "register"]);
Route::post("/login", [UserController::class, "login"]);

Route::middleware("auth:sanctum")->group(function () {
    Route::resource('permission', PermissionController::class);
    Route::resource('role', RoleController::class);

    Route::resource('bank', BankController::class)->only([
        "index", "store", "update", "destroy"
    ]);

    Route::post("/change_password", [UserController::class, "changePassword"]);
    Route::post("/logout", [UserController::class, "logout"]);
    Route::get('/me', [UserController::class, 'me']);
});