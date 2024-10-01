/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

function ChatBubble({ message, isSender, profilePic, timestamp }) {
  // Calculate the time difference using moment.js
  const timeAgo = moment(timestamp).fromNow();

  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
      {!isSender && (
        <img
          src={profilePic}
          alt="profile"
          className="w-8 h-8 border-2 border-purple-600 rounded-full mr-2 self-end"
        />
      )}

      <div>
        {/* Chat bubble */}
        <div
          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl shadow-md text-white ${
            isSender
              ? 'bg-purple-600 text-white'
              : 'bg-gray-500 text-gray-900'
          }`}
          style={{ wordBreak: 'break-word' }}
        >
          {message}
        </div>
        {/* Timestamp */}
        <span className={`text-xs text-gray-500 ${isSender ? 'text-right block' : 'text-left block'}`}>
          {timeAgo}
        </span>
      </div>

      {/* Profile pic if sender */}
      {isSender && (
        <img
          src={profilePic}
          alt="profile"
          className="w-8 h-8 border-2 border-purple-600 rounded-full ml-2 self-end"
        />
      )}
    </div>
  );
}

export default ChatBubble;
