<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mattch extends Model
{
    use HasFactory;

    protected $fillable = ['scheduled_time','participant1_id','participant2_id'];

    public function participant1()
    {
        return $this->belongsTo(Participant::class, 'participant_id');
    }

    public function participant2()
    {
        return $this->belongsTo(Participant::class, 'participant_id2');
    }

}
