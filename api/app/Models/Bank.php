<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    protected $fillable = [
        'account_holder_name',
        'bank_account',
        'bank_name',
        'account_type'
    ];
}
