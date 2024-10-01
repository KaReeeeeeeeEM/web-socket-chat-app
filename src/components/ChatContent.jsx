/* eslint-disable react/prop-types */
import React from 'react'
import PromptBar from './PromptBar'
import TopBar from './TopBar'
import ChatScreen from './ChatScreen'

function ChatContent({isCollapsed}) {
  return (
    <div className={`relative bg-gray-200 w-full ${isCollapsed ? 'lg:w-[95%]' : 'lg:w-[75%]'} h-[100vh] overflow-y-auto transition-all ease-in-out duration-700`}>
        <TopBar isCollapsed={isCollapsed} />
        <ChatScreen />
        <PromptBar isCollapsed={isCollapsed} />
    </div>
  )
}

export default ChatContent