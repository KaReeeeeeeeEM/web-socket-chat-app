/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ChatLayout from "./ChatLayout";
import chatLayouts from "../content/ChatLayouts";
import { MdChat } from "react-icons/md";

function Chats({active, setActive}) {
  return (
    <div className="w-full h-screen flex flex-col items-start justify-start px-4 lg:px-8 py-2 lg:py-8">
      <span className="mt-8 text-2xl flex items-center font-semibold text-purple-600">
        <MdChat className="mr-2" />
        Chats
      </span>
      <div className="w-full flex flex-col items-start justify-start mt-12 h-[85vh] overflow-y-auto">
        {chatLayouts.map(chat => 
            active === 'Chats' 
            && <ChatLayout 
                key={chat.key}
                active={active}
                setActive={setActive}
                isSender={chat.isSender}
                profile={chat.profilePic}
                username={chat.name} 
                lastMessage={chat.text}
                timestamp = {chat.timestamp}
                />)}
      </div>
    </div>
  );
}

export default Chats;
