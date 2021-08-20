<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class RegiController extends Controller
{
    public function create(Request $req)
    {
        if ($req->password == $req->cpassword) {
            $u = User::where('email', $req->email)
                ->first();
            if ($u) {
                return response()->json(['msg' => 'user already exists'], 403);
            } else {
                $user = new User;
                $user->name = $req->name;
                $user->username = $req->username;
                $user->email = $req->email;
                $user->password = $req->password;
                $user->phone = $req->phone;
                $user->profilePicture = 'default.jpeg';
                $user->gender = $req->gender;
                $user->type = "User";
                $user->status = 'Active';
                $user->save();
                return response()->json(['msg' => 'Successfully registered']);
            }
        } else {
            return response()->json(['msg' => 'password and confirm password doesnt match'], 403);
        }
    }
}
