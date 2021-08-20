<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Http\Request;
class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $businesses = Business::all();
        return response()->json([
            'statusCode'=>200,
            'businesses'=>$businesses
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
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function show(Business $business,$id)
    {
        $business = Business::find($id);
        return response()->json([
            'statusCode'=>200,
            'business'=>$business
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $business = Business::find($id);
        $business->update($request->all());

        return response()->json([
            'statusCode'=>200,
            'business'=>$business
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Business::destroy($id);

        $businesses = Business::all();
        return response()->json([
            'statusCode'=>200,
            'businesses'=>$businesses
        ]);
    }
}
