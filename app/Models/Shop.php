<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'contact', 'address'];

    public function users() {
        return $this->hasMany(User::class);
    }

    public function suppliers() {
        return $this->hasMany(Supplier::class);
    }
}