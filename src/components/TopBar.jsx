import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { FaAngleLeft } from 'react-icons/fa'
import { MdArrowLeft, MdDehaze } from 'react-icons/md'

function TopBar({isCollapsed}) {
  return (
    <div className={`bg-gray-200 fixed top-0 right-0 ${isCollapsed ? 'w-[95%]' : 'w-full lg:w-[75%]'} flex items-center justify-start transition-all ease-in-out duration-700 h-16 py-4 px-2 shadow-md`}>
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