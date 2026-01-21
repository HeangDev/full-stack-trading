<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('username')->unique();
            $table->string('country_code');
            $table->string('phone_number')->unique();
            $table->string('password');
            $table->string('avatar')->nullable();
            $table->boolean('status')->default(1)->nullable(); //1 often means "active" and 0 means "inactive,"
            $table->string('bank_id')->unique()->nullable();
            $table->decimal('balance', 10, 2)->default(0)->nullable();
            $table->double('current_point')->default(0)->nullable();
            $table->string('referral_code')->unique()->nullable();
            $table->unsignedBigInteger('referrer_by_id')->nullable();
            $table->foreign('referrer_by_id')->references('id')->on('users');
            $table->string('register_ip')->nullable();
            $table->datetime('last_login_at')->nullable();
            $table->string('last_login_ip')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
