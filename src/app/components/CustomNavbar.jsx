"use client"
import UserContext from '@/context/userContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { logout } from '../services/userService'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const CustomNavbar = () => {
    const context=useContext(UserContext)
    const router=useRouter();
    console.log(context);

    async function doLogout(){
        try {
            const result=await logout();
            console.log(result);
            context.setUser(undefined);
            router.push('/');
        } catch (error) {
            console.log(error);
            toast.error("Logout Error");
        }
    }

  return (
      <nav className='bg-blue-600 text-white h-12 py-2 px-3 flex justify-between items-center' >
        <div className='brand'>
            <Link href='/'>
                <h1 className='text-2xl font-semibold'>Work Manager</h1>
            </Link>
        </div>
        <div>
            <ul className='flex space-x-16'>
            {
                context.user && (
                    <>
                    <li><Link href='/' className='hover:text-blue-950'>Home</Link></li>
                <li><Link href='/add-task' className='hover:text-blue-950'>Add Task</Link></li>
                <li><Link href='/show-tasks' className='hover:text-blue-950'>Show Task</Link></li>
                    </>
                )
            }
            </ul>
        </div>
        <div>
            <ul className='flex space-x-16'>
                {
                    context.user && (
                        <>
                        <li><Link href={'#'} className='hover:text-blue-950'>{context.user.name}</Link></li>
                <li><button className='hover:text-blue-950' onClick={doLogout}>Logout</button></li>
                        </>
                    )
                }

                {
                    !context.user && (
                        <>
                        <li><Link href='/login' className='hover:text-blue-950'>Login</Link></li>
                <li><Link href='/signup' className='hover:text-blue-950'>Signup</Link></li>
                        </>
                    )
                }
            </ul>
        </div>
      </nav>
  )
}

export default CustomNavbar