<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participant ;
class ParticipantContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Participants = Participant::orderBy('id','desc')->get();
        return response()->json($Participants);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Participant =  new Participant;
        $Participant->name=$request->name;
        $Participant->skill_level=$request->skill_level;
        $Participant->email=$request->email;
        $Participant->availability=$request->availability;
        $Participant->save();
        return response()->json($Participant);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Participant = Participant::findOrFail($id);
        return response()->json($Participant);
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

        $Participant = Participant::findOrFail($id);
        $Participant->name=$request->name;
        $Participant->skill_level=$request->skill_level;
        $Participant->email=$request->email;
        $Participant->availability=$request->availability;
        $Participant->save();
        return response()->json($Participant);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Participant = Participant::findOrFail($id);
        $Participant->delete();
        return response()->json($Participant);
    }
}
