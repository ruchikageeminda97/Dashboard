'use client';

import Link from 'next/link';
import { RxDashboard } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";

import { AiOutlineMessage } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-72 relative bg-white border-r-2 border-[var(--boader)] p-4 h-screen">
      <div className="relative border-2 rounded-lg border-[var(--boader)] pb-4">
        <button
          onClick={() => setWorkspaceOpen(!workspaceOpen)}
          className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between"
        >
          <span className="flex items-center text-[var(--gray)]">
            <span className="w-6 h-6  bg-gray-300 rounded-full mr-2"></span> Workspace
          </span>
          <MdKeyboardArrowDown
            className={`transition-transform ${workspaceOpen ? 'rotate-180' : ''}`}
            size={16}
          />
        </button>
        {workspaceOpen && (
          <div className="ml-8 mt-2">
            <Link href="/root-folder" className="block p-2 hover:bg-gray-100 rounded text-black">Root Folder</Link>
          </div>
        )}
      </div>
      <ul className="space-y-1 mt-4">
        <li>
          <Link
            href="/dashboard"
            className={`p-2 text-[var(--menutextgray)] rounded flex items-center ${pathname === '/dashboard' ? 'selectedmenu' : ''}`}
          >
            <RxDashboard size={18} className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <button
            onClick={() => setBoardOpen(!boardOpen)}
            className={`w-full text-[var(--menutextgray)]   text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between ${pathname === '/' ? 'selectedmenu' : ''}`}
          >
            <span className="flex items-center">
              <FaRegFolder size={18} className="mr-2" /> Boards
            </span>
            <MdKeyboardArrowDown
              className={`transition-transform ${boardOpen ? 'rotate-180' : ''}`}
              size={16}
            />
          </button>
          {boardOpen && (
            <div className=" mt-2 text-[14px] space-y-1 border-2 border-[var(--boader)] rounded-lg p-2">
              <Link
                href="/boards/create-routes"
                className={`flex items-center p-1  hover:bg-gray-100 rounded ${pathname === '/boards/create-routes' ? 'selectedsubmenu' : 'text-[var(--gray)]'}`}
              >
                  <MdKeyboardArrowLeft
              className={ `transition-transform ${boardOpen ? 'rotate-180 mr-2' : 'mr-2'}`}
              size={16}
            />
                Create Routes
              </Link>
              <Link
                href="/boards/development-react-app"
                className={`flex items-center  p-1 hover:bg-gray-100 rounded ${pathname === '/boards/development-react-app' ? 'selectedsubmenu' : 'text-[var(--gray)]'}`}
              >
                <MdKeyboardArrowLeft
              className={ `transition-transform ${boardOpen ? 'rotate-180 mr-2' : 'mr-2'}`}
              size={16}
            />
                Development React App
              </Link>
              <Link
                href="/"
                className={`flex items-center p-1 hover:bg-gray-100 rounded ${pathname === '/' ? 'selectedsubmenu' : 'text-[var(--gray)]'}`}
              >
                <MdKeyboardArrowLeft
              className={ `transition-transform ${boardOpen ? 'rotate-180 mr-2' : 'mr-2'}`}
              size={16}
            />
                Sport Xi Project
              </Link>
              <Link
                href="/boards/wordpress-theme"
                className={`flex items-center p-1 hover:bg-gray-100 rounded ${pathname === '/boards/wordpress-theme' ? 'selectedsubmenu' : 'text-[var(--gray)]'}`}
              > <MdKeyboardArrowLeft
              className={ `transition-transform ${boardOpen ? 'rotate-180 mr-2' : 'mr-2'}`}
              size={16}
            />
                Wordpress Theme
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link
            href="/messages"
            className={`p-2 text-[var(--menutextgray)] hover:bg-gray-100 rounded flex items-center ${pathname === '/messages' ? 'selectedmenu' : ''}`}
          >
            <AiOutlineMessage size={18} className="mr-2" /> Messages
            <span className="ml-2 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </Link>
        </li>
        <li>
          <Link
            href="/calendar"
            className={`p-2 text-[var(--menutextgray)] rounded flex items-center ${pathname === '/calendar' ? 'selectedmenu' : ''}`}
          >
            <FaRegCalendarAlt size={18} className="mr-2" /> Calendar
          </Link>
        </li>
        <li>
          <Link
            href="/team-members"
            className={`p-2 text-[var(--menutextgray)] rounded flex items-center ${pathname === '/team-members' ? 'selectedmenu' : ''}`}
          >
            <LuUserRound size={18} className="mr-2" /> Team Members
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-[12%] w-[90%]">
        <Link
          href="/support"
          className="p-2 text-[var(--menutextgray)] rounded flex items-center"
        >
        

          <IoIosInformationCircleOutline size={18} className="mr-2" /> Support
        </Link>
        <button className="w-full bg-[#353945] text-white p-2 rounded flex items-center  mt-2">
          <TbLogout2 className='ml-4 text-[24px]' />
          <span className="ml-5">Logout</span>
        </button>
      </div>
    </div>
  );
}