import React from 'react'
import SideNav from '../components/SideNav'
import ChatContent from '../components/ChatContent'
import { useState } from 'react';

function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className='w-screen h-[100vh] flex items-start justify-start'>
      <SideNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} toggleCollapse={toggleCollapse} />
      <ChatContent isCollapsed={isCollapsed} />
    </div>
  )
}

export default Home