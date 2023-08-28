import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-600 flex justify-around items-center h-16 text-white' >
      <div>&copy; 2023 Work Manager. All Right Reserved</div>
      <div>
        <ul className='flex space-x-10'>
          <li><Link href={'#'} className='hover:text-blue-950'>Facebook</Link></li>
          <li><Link href={'#'} className='hover:text-blue-950'>Twitter</Link></li>
          <li><Link href={'#'} className='hover:text-blue-950'>Instagram</Link></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer