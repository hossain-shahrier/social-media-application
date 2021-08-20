<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Follow;
use App\Models\Post;

class UserController extends Controller
{
    public function getPost()
    {
        $post = Post::orderBy('id', 'desc')->take(10)->get();
        return response()->json($post);
    }

    public function deletePost($id)
    {
        $post = Post::find($id);
        $post->delete();
        return response()->json(['msg' => 'Successfully Deleted']);
    }

    public function getUser()
    {
        $user = User::get();
        return response()->json($user);
    }

    public function getUserById($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function Post(Request $req)
    {
        if ($req->has('photo')) {
            $file = $req->file('photo');
            if ($file->move('upload', $file->getClientOriginalName())) {
                $date = date('Y-m-d');
                $post = new Post;
                $post->post = $req->post;
                $post->date = $date;
                $post->react = "0";
                $post->comment = "0";
                $post->photo = $file->getClientOriginalName();
                $post->userId = $req->userId;
                $post->save();
                return response()->json($post);
            } else {
                return response()->json(['error' => "error"], 403);
            }
        } else {
            $date = date('Y-m-d');
            $post = new Post;
            $post->post = $req->post;
            $post->date = $date;
            $post->react = "0";
            $post->comment = "0";
            $post->userId = $req->userId;
            $post->save();
            return response()->json($post);
        }
    }

    public function updateUser(Request $req)
    {
        if ($req->password == $req->cpassword) {
            $user = User::where('email', $req->email)
                ->first();
            $user->email = $req->email;
            $user->password = $req->password;
            if ($req->name)
                $user->name = $req->name;
            if ($req->username)
                $user->username = $req->username;
            if ($req->phone)
                $user->phone = $req->phone;
            if ($req->gender)
                $user->gender = $req->gender;
            if ($req->address)
                $user->address = $req->address;
            $user->save();
            return response()->json(['msg' => 'Successfully Updated']);
        }
    }

    public function removeReactPost($id)
    {
        $post = Post::find($id);
        $post->react = $post->react - 1;
        $post->save();
        return response()->json($post);
    }

    public function reactPost($id)
    {
        $post = Post::find($id);
        $post->react = $post->react + 1;
        $post->save();
        return response()->json($post);
    }

    public function getAllFriends($id)
    {
        $friends = Follow::where('user_id', $id)
            ->get();
        $f = array();
        foreach ($friends as $friend) {
            $user = User::where('id', $friend->follows_id)
                ->first();
            array_push($f, $user);
        }
        return response()->json($f);
    }

    public function getActiveFriends($id)
    {
        $friends = Follow::where('user_id', $id)
            ->get();
        $f = array();
        foreach ($friends as $friend) {
            $user = User::where('id', $friend->follows_id)
                ->where('status', "Active")
                ->first();
            if ($user) {
                array_push($f, $user);
            }
        }
        return response()->json($f);
    }
}
