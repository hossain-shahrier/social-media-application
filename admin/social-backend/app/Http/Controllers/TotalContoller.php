<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use App\Models\Community;
use App\Models\User;
class TotalContoller extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::count();
        $businesses = Business::count();
        $communities = Community::count();
        return response()->json([
            'statusCode'=>200,
            'users'=>$users,
            'businesses'=>$businesses,
            'communities'=>$communities,
        ]);
    }
}
