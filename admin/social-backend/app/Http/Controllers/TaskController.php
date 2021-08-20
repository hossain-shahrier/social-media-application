<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::all();
        return response()->json([
            'statusCode'=>200,
            'tasks'=>$tasks
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
        $tasks = new Task;
        $tasks->task_name = $request->task_name;
        $tasks->email = $request->email;
        $tasks->save();

        return response()->json([
            'statusCode'=>200,
            'message'=>'task saved'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task,$id)
    {
        $task = Task::find($id);
        return response()->json([
            'statusCode'=>200,
            'task'=>$task
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Task $task, $id)
    {
        $task = Task::find($id);
        $task->task_name = $request->task_name;
        $task->update();

        return response()->json([
            'statusCode'=>200,
            'task'=>$task
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task,$id)
    {
        Task::destroy($id);
        $task = Task::all();
            return response()->json([
            'statusCode'=>200,
            'task'=>$task
        ]);
    }
}
