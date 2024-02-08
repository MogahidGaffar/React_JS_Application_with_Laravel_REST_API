<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mattch;
use App\Models\Participant;
use Carbon\Carbon;
class MatchContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Mattches = Mattch::with('participant1', 'participant2')->get();
        return response()->json($Mattches);
    }




    public function create_schedule()
    {


                // Create or find a new match
                $match = Mattch::create([
                'scheduled_time' => Carbon::now(),
                // Other match details...
                ]);

// Find available participants with the required skill level
$participants = Participant::availableForMatch($match)->inRandomOrder()->limit(2)->get();

// Attach participants to the match
$match->participants()->attach($participants);

return response()->json("success");

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
