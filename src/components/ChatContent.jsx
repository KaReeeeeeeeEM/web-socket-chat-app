/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import PromptBar from './PromptBar'
import TopBar from './TopBar'
import ChatScreen from './ChatScreen'
import Chats from './Chats';

function ChatContent({isCollapsed, active, setActive}) {
  return (
    <div className={`relative bg-gray-200 w-full ${isCollapsed ? 'lg:w-[95%]' : 'lg:w-[75%]'} h-[100vh] overflow-y-auto transition-all ease-in-out duration-700`}>
        {active === 'Conversation' && <TopBar isCollapsed={isCollapsed} />}
        {active === 'Conversation' && <ChatScreen />}
        {active === 'Conversation' && <PromptBar isCollapsed={isCollapsed} />}

        {active === 'Chats' && <Chats active={active} setActive={setActive} />}
    </div>
  )
}

export default ChatContent