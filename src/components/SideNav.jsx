import React from 'react'
import { BiCollapseAlt } from 'react-icons/bi'
import { MdDehaze } from 'react-icons/md'

function SideNav() {
  return (
    <section className='hidden lg:flex flex-col p-2 lg:w-[25%] h-full bg-gray-300'>
        <span className='w-full flex items-end justify-end pr-8 text-purple-600'>
          <BiCollapseAlt className='w-6 h-6 text-end' />
        </span>
    </section>
  )
}

export default SideNav