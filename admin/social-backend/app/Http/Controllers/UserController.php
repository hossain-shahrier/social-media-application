<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all()->whereNotIn('id', [11]);
        return response()->json([
            'statusCode'=>200,
            'users'=>$users
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return response()->json([
            'statusCode'=>200,
            'user'=>$user
        ]);
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
        $user = User::find($id);
        $user->update($request->all());

        return response()->json([
            'statusCode'=>200,
            'user'=>$user
        ]);
    }
    // 
    public function action( $id)
    {
        $user = User::find($id);
        if($user->status == 'Active'){
            $user->status = 'Deactivated';
            $user->save();
        }
        else {
            $user->status = 'Active';
            $user->save();
        }
        $users = User::all();
        return response()->json([
            'statusCode'=>200,
            'users'=>$users
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);
        
        $users = User::all();
        return response()->json([
            'statusCode'=>200,
            'users'=>$users
        ]);
    }
   
}
