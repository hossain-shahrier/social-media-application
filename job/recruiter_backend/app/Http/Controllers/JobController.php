<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobPost;
use App\Models\AddUser;
use App\Models\JobApply;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    function joblist(){
     $joblist = JobPost::all();
    //  return response()->json($joblist,200);
    return response()->json([
            'status'=> 200,
            'joblist'=>$joblist,
        ]);
    }
    function jobdetails($id){
        $jobdetails = JobPost::find($id);

        return response()->json([
          'status'=>200,
          'updatejob'=>$jobdetails,
        ]);
    }


   function addjob(Request $req){
     $validator = Validator::make($req->all(),[
       'jobtitle'=>'required|max:100',
       'jobinfo'=>'required|max:100',
       'jobcategory'=>'required|max:100',
       'jobtype'=>'required|max:100',
       'joblocation'=>'required|max:100',
       'jobvacancy'=>'required|numeric|max:100',
     ]);   
     if($validator->fails()){
         return response()->json([
            'status_error'=> $validator->errors(),
            
        ]);
     }
     else{

     
        $job = new JobPost;

        $job->title = $req->jobtitle;
        $job->info = $req->jobinfo;
        $job->category = $req->jobcategory;
        $job->type = $req->jobtype;
        $job->location = $req->joblocation;
        $job->vacancy = $req->jobvacancy;

        $job->save();
        // return "HELLO JOB";
        // return response()->json($job, 200);
        return response()->json([
            'status'=> 200,
            'message'=>'Job Added',
        ]);
    }
}

    function updatejob($id){
        // $updatejob = JobPost::find($id);
         $updatejob = JobPost::where('id', $id)
                            ->first();

        return response()->json([
          'status'=>200,
          'updatejob'=>$updatejob,
        ]);
    }
    function editjob(Request $req, $id){
        $edijob = JobPost::where('id', $id)
                           ->first();
        // $edijob = JobPost::find($id);

        $editjob->title = $req->jobtitle;
        $editjob->info = $req->jobinfo;
        $editjob->category = $req->jobcategory;
        $editjob->type = $req->jobtype;
        $editjob->location = $req->joblocation;
        $editjob->vacancy = $req->jobvacancy;

        $editjob->save();
        
        return response()->json([
            'status'=> 200,
            'message'=>'Job Updated',
        ]);
    }

    function removejob($id){
        $removejob = JobPost::find($id);
        $removejob->delete();

        return response()->json([
            'status'=> 200,
            'message'=>'Job Deleted',
        ]);
    }

    function adduser(Request $req){
        $adduser = new AddUser;
        $adduser->name = $req->name;
        $adduser->image = $req->image;

        $adduser->save();
         return response()->json([
            'status'=> 200,
            'message'=>'Friend Added',
        ]);
    }
     public function jobsearch(Request $req){
        //$search = JobPost::all();
        $result = JobPost::where('title', 'LIKE', "%{$req->searching}%")
                           ->orWhere('category', 'LIKE', "%{$req->searching}%") 
                           ->get();
        // return view('recruiter.jobsearch', compact('result'));
        return response()->json([
          'status'=>200,
          'updatejob'=>$result,
        ]);
    }
    function jobapply(Request $req, $id){

        $validator = Validator::make($req->all(),[
       'firstname'=>'required|max:100',
       'lastname'=>'required|email',
       'email'=>'required|max:100',
       'phone'=>'required|min:11|numeric',
       'address'=>'required|max:100',
       'addfile'=>'required|max:10000|mimes:doc,docx,pdf',
     ]);   
     if($validator->fails()){
         return response()->json([
            'status_error'=> $validator->errors(),
            
        ]);
     }

     else{
        $jobapply = new Jobapply;
         $job = JobPost::where('id', $id)
                            ->first();
        $jobcount = $job->applicants;
        $jobcount+=1;
        $job->applicants = $jobcount;
        $job->save();

        if($req->hasFile('addfile')){
            $file = $req->file('addfile');
            $filename = $file->getClientOriginalName();
            $fileex = $filename. '.' .$file->getClientOriginalExtension();
            // $filemim = $file->getMimType();
            $filesize = $file->getSize();

            
            $file->move('upload/', $filename);

            $jobapply->file = $filename;

        }
        $jobapply->job_id = $job->id;
        $jobapply->firstname = $req->firstname;
        $jobapply->lastname = $req->lastname;
        $jobapply->email = $req->email;
        $jobapply->phone = $req->phone;
        $jobapply->address = $req->address;

        return response()->json([
          'status'=>200,
          'applyjob'=>'Apply successful',
        ]);
    }
}
}
