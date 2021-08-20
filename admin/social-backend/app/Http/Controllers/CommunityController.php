<?php

namespace App\Http\Controllers;

use App\Models\Community;
use Illuminate\Http\Request;

class CommunityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $communities = Community::all();
        return response()->json([
            'statusCode'=>200,
            'communities'=>$communities
        ]);
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
     * @param  \App\Models\Community  $community
     * @return \Illuminate\Http\Response
     */
    public function show(Community $community,$id)
    {
        $community = Community::find($id);
        return response()->json([
            'statusCode'=>200,
            'community'=>$community
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Community  $community
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Community $community,$id)
    {
        
        $community = Community::find($id);
        $community->update($request->all());

        return response()->json([
            'statusCode'=>200,
            'community'=>$community
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Community  $community
     * @return \Illuminate\Http\Response
     */
    public function destroy(Community $community,$id)
    {
        Community::destroy($id);

        $communities = Community::all();
        return response()->json([
            'statusCode'=>200,
            'communities'=>$communities
        ]);
    }
}
