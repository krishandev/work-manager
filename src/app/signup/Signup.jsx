"use client";

import React, { useState } from 'react'
import signupBanner from '../assets/signup.svg'
import Image from 'next/image'
import { toast } from 'react-toastify';
import { signUp } from '../services/userService';

const  Signup = () => {

  const [data, setData]=useState({
    name:"",
    email:"",
    password:"",
    about:"",
    profileURL:"https://i.pinimg.com/236x/57/35/b9/5735b9082661382b7b39a2219db7e31d.jpg"
  })

  const doSignup=async(event)=>{

    event.preventDefault();
    console.log(event)
    console.log(data);
    if(data.name.trim()==="" || data.name==null){
      toast.warning("Name is Required!!", {
        position:"top-center"
      });
      return;
    }

    try {
      const result=await signUp(data);
      console.log(result);

      toast.success("User is Registered !!", {position:'top-center'})

      setData({
        name:"",
        email:"",
        password:"",
        about:"",
        profileURL:""

      })
    } catch (error) {
      console.log(error);
      toast.error("Signup Error", {position:'top-center'})
    }

  }

  const resetForm=()=>{
    setData({
      name:"",
      email:"",
      password:"",
      about:"",
      profileURL:""

    })
  }

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4 col-start-5 border p-2 m-2 bg-slate-100'>
        <div>
          <div  className='flex justify-center mb-2 '>
          <Image src={signupBanner} alt="signup banner" style={{width:'50%'}}/>
          </div>
          <div className='flex justify-center'><h1>Signup Here</h1></div>
          <form className='mt-3 p-2' onSubmit={doSignup}>
            <div >
              <label>Name</label>
              <input type='text' placeholder='Enter Name' className='rounded p-1 border ml-2 w-full' id='signup_name' name='signup_name' 
              onChange={(event)=>{
                setData({
                  ...data, name:event.target.value
                })
              }}
              value={data.name}
              />
            </div>

            <div className='mt-4'>
              <label>Email</label>
              <input type='email' placeholder='Enter Email' className=' rounded border p-1 ml-2 w-full' id='signup_email' name='signup_email'
              onChange={(event)=>{
                setData({
                  ...data, email:event.target.value
                })
              }}
              value={data.email}
              />
            </div>

            <div className='mt-4'>
              <label>Password</label>
              <input type='password' placeholder='Enter Password' className=' rounded border p-1 ml-2 w-full' id='signup_password' name='signup_password'
              onChange={(event)=>{
                setData({
                  ...data, password:event.target.value
                })
              }}
              value={data.password}
              />
            </div>

            <div className='mt-4'>
              <label>About</label>
              <textarea  placeholder='Enter About' className=' rounded border p-1 ml-2 w-full' id='signup_about' name='signup_about'
              
              onChange={(event)=>{
                setData({
                  ...data, about:event.target.value
                })
              }}
              value={data.about}

              />
            </div>
          
          <div className='flex justify-center'>
            <button type='submit' className='bg-blue-950 py-2 px-3 rounded text-white'>Signup</button>
            <button onClick={resetForm} className='ml-5 bg-red-400 py-2 px-3 rounded text-white'>Reset</button>
          </div>


          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup