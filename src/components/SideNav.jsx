/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BiCollapseAlt, BiExpandAlt } from 'react-icons/bi';
import { MdChat, MdLogin, MdLogout } from 'react-icons/md';
import RegisterUser from './RegisterUser';
import LazyImage from 'react-lazy-blur-image';
import axios from 'axios';

function SideNav({isCollapsed, toggleCollapse}) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = async (id) => {
    await axios.get(`https://monkfish-app-bxaz5.ondigitalocean.app/api/users/${id}`)
     .then((res) => {
      setUser(res.data);
    });
  }

  useEffect(() => {
    const userId = localStorage.getItem('spikeId');
    if (userId) {
      fetchUser(userId);
    }
  },[]);

  const handleLogout = () => {
    localStorage.removeItem('spike-token');
    localStorage.removeItem('spikeId');
    localStorage.removeItem('spikeUsername');
    window.location.reload();
  }


    return (
    <section
      className={`hidden lg:flex flex-col p-2 h-full bg-gray-300 transition-all ease-in-out duration-700 ${
        isCollapsed ? 'lg:w-[5%]' : 'lg:w-[25%]'
      }`}
    >
      {/* Login modal */}
      {openLoginModal && (
        <RegisterUser isOpen={openLoginModal} onClose={() => setOpenLoginModal(!openLoginModal)} callback={() => setOpenLoginModal(!openLoginModal)} />
      )}
      {/* Toggle button */}
      <span className={`w-full flex items-end justify-end ${isCollapsed ? 'pl-0':'pr-4'} transition-all ease-in-out duration-700 text-purple-600`}>
        <button onClick={toggleCollapse} className='focus:border-none focus:outline-none'>
          {isCollapsed ? (
            <BiExpandAlt className='w-5 h-5 text-end' />
          ) : (
            <BiCollapseAlt className='w-6 h-6 text-end' />
          )}
        </button>
      </span>

      {/* Sidebar content */}
      {!isCollapsed && (
        <div className="mt-8">
          <span className='flex items-center justify-start'>
              <span className='h-12 w-12 rounded-full bg-gray-300 border-2 border-gray-500'>
              {user && 
              <LazyImage
                    placeholder={user.profile}
                    uri={user.profile}
                    render={(src, style) => 
                        <img 
                            src={src} 
                            style={style} 
                            loading="lazy" 
                            className='w-full h-full object-cover rounded-full'
                        />
                    }
                />}
              </span>
              <span className='ml-2 flex flex-col items-start justify-start'>
                    {user && <span className='text-gray-600'>{user.username}</span>}
                    {user && <span className='text-sm text-purple-600'>{user.email}</span>}
              </span>
          </span>
        </div>
      )}

      {/* Icons-only when collapsed */}
      {isCollapsed && (
        <div className="mt-8 flex flex-col items-center justify-center">
          <span className='flex items-center justify-start'>
              <span className='h-12 w-12 rounded-full bg-gray-300 border-2 border-gray-500'>
              {user && 
              <LazyImage
                    placeholder={user.profile}
                    uri={user.profile}
                    render={(src, style) => 
                        <img 
                            src={src} 
                            style={style} 
                            loading="lazy" 
                            className='w-full h-full object-cover rounded-full'
                        />
                    }
                />}
              </span>
          </span>
          <button className='group mt-8 bg-gray-300 hover:bg-purple-600 transition-all ease-in-out duration-700'>
            <MdChat className='text-purple-600 group-hover:text-white transition-all ease-in-out duration-700' />
          </button>
          {user ? 
            <button onClick={handleLogout} className='mt-2'>
              <MdLogout />
            </button>
            :<button onClick={() => setOpenLoginModal(!openLoginModal)} className='mt-2'>
              <MdLogin />
            </button>}
      </div>
      )}
    </section>
  );
}

export default SideNav;
