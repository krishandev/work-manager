import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import {AiFillDelete} from 'react-icons/ai'


const Task = ({task, deleteTaskParent}) => {
    const {user}=useContext(UserContext)

    function deleteTask(taskId){
        deleteTaskParent(taskId)

    }
  return (
    <div className='m-5 bg-slate-300 rounded p-2'>
        <div className='flex justify-between'>
            <h1 className='text-xl font-bold'>{task.title}</h1>
            <span className='hover:text-black' onClick={()=>{deleteTask(task._id)}}><AiFillDelete/></span>
        </div>
        <div className='text-sm'>{task.description}</div>
        <div className='text-right'><p>Author: <span className='font-bold'>{user?.name}</span></p></div>
    </div>
  )
}

export default Task