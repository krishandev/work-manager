"use client";
import React, { useState } from 'react'
import addTaskImg from '../assets/addtask.svg';
import Image from 'next/image'
import { addTask } from '../services/taskService';
import {toast} from 'react-toastify';

export const metadata={
    title:"Add Task",
    description:"You can add task"
}
const AddTask = () => {
  document.title=metadata.title;

  const [task, setTask]=useState({
    title:"",
    description:"",
    userId:"64dc2e12b3e81a7523d6f748"
  });

  const handleAddTask=async (event)=>{
    event.preventDefault();
    console.log(task);

    try {
      const result= await addTask(task);
      console.log(result);
      toast.success("Your Task is Added !!", {position:'top-center'});

      setTask({
        title:"",
        description:"",
      })

    } catch (error) {
      console.log(error);
      toast.error("Task not Added !!", {position:'top-center'})
    }
  }

  return (
    <div className='justify-center grid grid-cols-12 m-5'>
        
        <div className='border border-red-800 col-span-6 col-start-4 p-2  text-black m-0 rounded-lg '>
          <div className='flex justify-center mb-1'>
            <Image src={addTaskImg} alt="add Task" style={{width:"50%"}}/>
          </div>
          <div className='flex justify-center'><h1 className='text-3xl font-semibold'>Add Task Here</h1></div>

          <form action='#' onSubmit={handleAddTask}>
          
          <div className='border m-3 p-2 flex space-x-5'>
          <label>Title</label>
            <input type='text' placeholder='Enter Task Title' className='border w-full p-1 rounded text-black' id='task_title' name='task_title' onChange={(event)=>{
              setTask({...task, title:event.target.value});
            }} value={task.title} />
          </div>

          <div className='border m-3 p-2 flex space-x-5 items-center'>
          <label>Content</label>
            { <textarea rows={'5'} className='border w-full rounded text-black p-2' id='task_description' name='task_description' onChange={(event)=>{
              setTask({...task, description:event.target.value});
            }} value={task.description}/> }

{/* <input type='text' placeholder='Enter Task Description' className='border w-full p-1 rounded text-black' id='task_description' name='task_description' onChange={(event)=>{
              setTask({...task, description:event.target.value});
            }} value={task.description} /> */}


          </div>

          <div className=' border m-3 p-2 flex space-x-5 items-center'>
            <label>Status</label>
            <select className='text-black p-1 rounded w-full' id='task_status' name='task_status'>
              <option disabled>----Select----</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
        
        <div className='flex justify-center'>
          <button className='bg-gray-500 hover:bg-blue-700 text-white py-2 px-3 rounded'>Add ToDo</button>
          <button className='bg-red-500 hover:bg-black ml-8 py-2 px-3 text-white rounded'>Clear</button>
        </div>
        
          </form>

        </div>
    </div>
  )
}

export default AddTask