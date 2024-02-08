<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mattch extends Model
{
    use HasFactory;

    protected $fillable = ['scheduled_time','participant1_id','participant2_id'];

    public function participants()
    {
        return $this->belongsToMany(Participant::class, 'match_participants');
    }


}
