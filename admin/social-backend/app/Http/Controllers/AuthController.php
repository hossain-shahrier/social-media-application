<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name'=> 'required|string',
            'email'=> 'required|string|unique:users,email',
            'password'=> 'required|string|confirmed',
        ]);
        $user = User::create([
            'name'=> $fields['name'],
            'email'=> $fields['email'],
            'password'=> bcsqrt($fields['password'])
            ]
        );
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user'=> $user,
            'token'=> $token
        ];
        return response($response,201);
    }
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return [
            'status'=>200,
            'message'=> ' Logged out successfully',
        ];
    }
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email'=> 'required|string',
            'password'=> 'required|string',
        ]);
        
        $user = User::where('email', $fields['email'])->where('password', $fields['password'])->first();
        // Check email and password
        if(!$user){
            return response()->json([
                'status'=>401,
                'message'=>"Invalid user"
            ]);
        }
        $token = $user->createToken($user->email)->plainTextToken;

        return response()->json([
            'status'=>200,
            'username'=>$user->name,
            'email'=>$user->email,
            'token'=>$token,
            'password'=>$user->password,
            'message'=>"success"
        ]);
    }
}
