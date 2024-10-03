/* eslint-disable react/prop-types */
import moment from 'moment';
import LazyImage from "react-lazy-blur-image";

function ChatLayout({username,profile,isSender,lastMessage, timestamp,setActive}) {
  const timeAgo = moment(timestamp).fromNow();
  return (
    <div onClick={() => setActive('Conversation')} className='w-full cursor-ointer flex items-start border-b-2 border-gray-100 justify-start py-2 my-2 hover:shadow transition ease-in-out duration-500'>
      {/* profile */}
      <div className='w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 bg-gray-300 border-gray-500 mr-2'>
        <LazyImage
            placeholder={profile}
            uri={profile}
            render={(src, style) => (
              <img
                src={src}
                style={style}
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            )}/>          
      </div>

      {/* details */}
      <span className='w-[90%] flex flex-col items-start justify-start'>
          <span className='text-purple-500 font-bold'>{username}</span>
          <span className='w-full flex items-center justify-between font-light text-gray-400 text-start text-sm'>
            <span className='mt-1 text-xs md:text-sm'>
              <span className='italic text-purple-800'>{isSender ? 'You: ' : username + ': ' }</span> {lastMessage.length > 100 ? lastMessage.slice(0,100) + '...' : lastMessage}
            </span>
          </span>
          <span className='w-full flex justify-end text-xs text-gray-500'>
                {timeAgo}
          </span>
      </span>
    </div>
  )
}

export default ChatLayout