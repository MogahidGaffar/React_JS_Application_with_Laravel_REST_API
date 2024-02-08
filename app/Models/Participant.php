<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Mattch;

class Participant  extends Model
{
    use HasFactory;
   
    protected $fillable = ['name','skill_level','email','availability'];


    public function mattches()
    {
        return $this->belongsToMany(Mattch::class, 'mattch_participants');
    }

    public function scopeAvailableForMatch($query, Mattch $match)
    {
        return $query->whereDoesntHave('matches', function ($subquery) use ($match) {
            $subquery->where('match_date', $match->match_date);
        })->where('skill_level', $match->getFirstAvailableParticipantSkillLevel());
    }


}
 
