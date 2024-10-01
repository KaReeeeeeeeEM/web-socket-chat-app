import React from 'react';
import messages from '../content/Chats';
import ChatBubble from './ChatBubble';

function ChatScreen() {
  return (
    <div className='p-3 lg:p-4 mt-16 mb-12'>
        {messages.map(chat => 
            <ChatBubble
                key={chat.key}
                message={chat.text}
                isSender={chat.isSender}
                profilePic={chat.profilePic}
                timestamp={chat.timestamp}
                />)
            }
    </div>
  )
}

export default ChatScreen