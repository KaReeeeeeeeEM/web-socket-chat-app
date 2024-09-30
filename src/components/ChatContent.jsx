import React from 'react'
import PromptBar from './PromptBar'
import TopBar from './TopBar'

function ChatContent() {
  return (
    <div className='relative bg-gray-200 w-full lg:w-[75%] h-[100vh] overflow-y-auto'>
        <TopBar />
        ChatContent
        <PromptBar />
    </div>
  )
}

export default ChatContent