<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Bank extends Model
{
    protected $fillable = [
        'account_holder_name',
        'bank_account',
        'bank_name',
        'account_type'
    ];
}
