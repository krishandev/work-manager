"use client"
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { login } from '../services/userService'
import { useRouter } from 'next/navigation'
import UserContext from '@/context/userContext'

const Login = () => {
    
    const router=useRouter();
    const context=useContext(UserContext);
    
    const [logindata, setLogindata]=useState({
        email:"",
        password:""
    })

    const loginFormHandler=async(event)=>{
        event.preventDefault();
        console.log(logindata);
        if(logindata.email.trim()==="" || logindata.password.trim()===""){
            toast.info("Invalid Data !!", {position:"top-center"});
         return;
        }

     try {

        const result=await login(logindata);
        console.log(result);
        toast.success("Logged In");
        context.setUser(result.user);
        router.push('/profile/user');
        
     } catch (error) {
        console.log(error);
        toast.error(error.response.data.message, {position:'top-center'})
        
     }

    }
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5 border p-2'>
            <div>
                <div className='flex justify-center'>
                <h1>Login Here</h1>
                </div>
                <form onSubmit={loginFormHandler}>
                    <div>
                        <label>Email</label>
                        <input type='email' placeholder='Enter Email' id='login_email' name='login_email' className='border w-full rounded' 
                        onChange={(event)=>{
                            setLogindata({
                                ...logindata, email:event.target.value
                            })
                        }}
                        value={logindata.email}
                        />
                    </div>

                    <div className='my-2'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter password' id='login_password' name='login_password' className='border w-full rounded'
                        onChange={(event)=>{
                            setLogindata({
                                ...logindata, password:event.target.value
                            })
                        }}
                        value={logindata.password}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-blue-950 rounded text-white py-2 px-3' type='submit'>Login</button>
                        <button className='bg-red-600 rounded text-white py-2 px-3 ml-3 '>Reset</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login