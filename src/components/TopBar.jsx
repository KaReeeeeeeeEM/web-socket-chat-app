import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { FaAngleLeft } from 'react-icons/fa'
import { MdArrowLeft, MdDehaze } from 'react-icons/md'

function TopBar() {
  return (
    <div className='flex items-center justify-start w-full h-16 py-4 px-2 shadow-md'>
        <span className='flex lg:hidden'>
            <FaAngleLeft className='w-6 h-6 mr-6' />
        </span>
        <span className='h-12 w-12 rounded-full bg-gray-300 border-2 border-gray-500'>

        </span>
        <span className='ml-2'>
            User
        </span>
    </div>
  )
}

export default TopBar