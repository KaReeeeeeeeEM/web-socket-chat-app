import React from 'react'
import SideNav from '../components/SideNav'
import ChatContent from '../components/ChatContent'

function Home() {
  return (
    <div className='w-screen h-[100vh] flex items-start justify-start'>
      <SideNav />
      <ChatContent />
    </div>
  )
}

export default Home