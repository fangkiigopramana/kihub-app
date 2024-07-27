<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = 'id';

    public function type(){
        return $this->belongsTo(Type::class, 'type_id');
    }

}