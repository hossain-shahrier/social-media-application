<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;

class LoginController extends Controller
{
    public function logout(Request $req)
    {
        $user = User::where('email', $req->email)
            ->where('password', $req->password)
            ->first();
        $user->status = 'Deactive';
        $user->save();
        return response()->json(['msg' => 'User loggedout', 'status' => $user->status]);
    }

    public function login(Request $req)
    {
        $user = User::where('email', $req->email)
            ->where('password', $req->password)
            ->first();

        if ($user) {
            if ($user->type == 'User') {
                $user->status = 'Active';
                $user->save();
                return response()->json($user);
            } else {
                return response()->json(['msg' => 'invaild email or password'], 403);
            }
        } else {
            return response()->json(['msg' => 'User does not exist'], 404);
        }
    }

    public function google(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if (!$user) {
            $user = new User;
            $user->name = $req->name;
            $user->username = $req->givenName;
            $user->email = $req->email;
            $user->password = "123456";
            $user->phone = "";
            $user->profilePicture = 'default.jpeg';
            $user->gender = "";
            $user->type = "User";
            $user->status = 'Active';
            $user->save();
            return response()->json($user);
        } else {
            $user->status = 'Active';
            $user->save();
            return response()->json($user);
        }
    }
}
