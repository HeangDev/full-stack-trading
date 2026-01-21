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
        Schema::create('banks', function (Blueprint $table) {
            $table->id();
            $table->string('account_holder_name');
            $table->integer('bank_account')->unique();
            $table->string('bank_name')->unique();
            $table->string('account_type');
            $table->string('status')->default(1);
            $table->foreignIdFor(\App\Models\AdminUser::class, 'staff_id')->nullable();
            $table->timestamps();
        });
    }

    /**t
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banks');
    }
};
