/* eslint-disable react/prop-types */
import React from "react";
import { BiSend } from "react-icons/bi";

function PromptBar({isCollapsed}) {
  return (
    <div className={`fixed bottom-0 right-0 ${isCollapsed ? 'w-[95%]' : 'w-full lg:w-[75%]'} h-auto p-2 transition-all ease-in-out duration-700`}>
    <div className="relative flex items-center">
      <input
        type="text"
        className="relative bg-white w-full h-12 ring-2 focus:ring-purple-600 focus:outline-none rounded-md p-2"
        placeholder="Type a message..."
        autoFocus={true}
      />

      <button 
        type="submit"
        className="w-auto h-10 hover:border-purple-600 hover:opacity-75 absolute bottom-1 right-2 flex items-center text-sm md:text-md transition ease-in-out duration-700">
        Send
        <BiSend className="ml-2" />
      </button>
      </div>
    </div>
  );
}

export default PromptBar;
