'use client';
import Image from "next/image";
import logo from "../../public/logo.png"; 
import user from "../../public/User.png";
import settings from "../../public/Settings.png";
import notification from "../../public/Notification.png";

import { FaPlus, FaSearch } from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-[#E6E8EC] p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold">
          <img src={logo.src} alt="Logo" className="h-6 w-auto ml-6" />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex justify-around items-center bg-[var(--primary)] text-white text-[12px] h-12 w-[170px] px-4 py-2 rounded-[7px] font-semibold">Create new board <FaPlus />
        </button>

       <div className="relative  ">
          <input
            type="text"
            placeholder="Search tasks..."
            className="p-2 w-60 pl-8  rounded bg-[#F4F5F6]"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        </div>
        <div className="ml-12 flex items-center space-x-[14px]">
          <img src={settings.src} alt="settings" className="h-6 w-auto ml-6" />
          <img src={notification.src} alt="Notifications" className="h-6 w-auto ml-6" />
          <img src={user.src} alt="user" className="h-8 w-auto " />

          
        </div>
      </div>
    </nav>
  );
}