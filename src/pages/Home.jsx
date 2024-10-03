import React from 'react'
import SideNav from '../components/SideNav'
import ChatContent from '../components/ChatContent'
import { useState } from 'react';

function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [ active ,setActive ] = useState('Chats');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className='w-screen h-[100vh] flex items-start justify-start'>
      <SideNav active={active} setActive={setActive} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} toggleCollapse={toggleCollapse} />
      <ChatContent active={active} setActive={setActive} isCollapsed={isCollapsed} />
    </div>
  )
}

export default Home