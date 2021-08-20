<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;
    protected $table = 'business';
    protected $fillable = [
        'business_name',
        'business_email',
        'business_type',
        'phone',
        'location',
        'profit'
    ];
}
