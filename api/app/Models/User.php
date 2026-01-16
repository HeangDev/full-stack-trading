<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'username',
        'country_code',
        'phone_number',
        'password',
        'profile_image',
        'referral_code',
        'referrer_id',
        'status'
    ];

    // User has many withdrawals
    public function withdrawals()
    {
        return $this->hasMany(Withdraw::class);
    }

    // User has many referrals
    public function referrals()
    {
        return $this->hasMany(Referral::class, 'referrer_id');
    }

    // If user was referred by someone
    public function referrer()
    {
        return $this->belongsTo(User::class, 'referrer_id');
    }
}
