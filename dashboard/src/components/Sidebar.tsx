'use client';

import Link from 'next/link';
import { RxDashboard } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState<string | null>(null); // Track which sub-menu is open
  const pathname = usePathname();

  return (
    <div className="w-64 relative bg-white border-r-2 border-[#E6E8EC] p-4 h-screen">
      <div className="relative">
        <button
          onClick={() => setWorkspaceOpen(!workspaceOpen)}
          className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between"
        >
          <span className="flex items-center">
            <span className="w-6 h-6 bg-gray-300 rounded-full mr-2"></span> Workspace
          </span>
          <MdKeyboardArrowRight
            className={`transition-transform ${workspaceOpen ? 'rotate-90' : ''}`}
            size={16}
          />
        </button>
        {workspaceOpen && (
          <div className="ml-8 mt-2">
            <Link href="/root-folder" className="block p-2 hover:bg-gray-100 rounded text-gray-600">Root Folder</Link>
          </div>
        )}
      </div>
      <ul className="space-y-2 mt-4">
        <li>
          <Link
            href="/"
            className={`block p-2 hover:bg-gray-100 rounded flex items-center ${pathname === '/' ? 'selectedmenu' : ''}`}
          >
            <RxDashboard size={18} className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setBoardOpen(!boardOpen);
              if (!boardOpen) setSubMenuOpen(null); // Close sub-menu when collapsing
            }}
            className={`w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between ${pathname === '/boards' ? 'selectedmenu' : ''}`}
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
            <div className="ml-8 mt-2 space-y-1">
              <button
                onClick={() => setSubMenuOpen(subMenuOpen === 'create-routes' ? null : 'create-routes')}
                className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between"
              >
                <span>Create Routes</span>
                <MdKeyboardArrowRight
                  className={`transition-transform ${subMenuOpen === 'create-routes' ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {subMenuOpen === 'create-routes' && (
                <div className="ml-8 mt-1">
                  <Link href="/boards/create-routes" className={`block p-2 hover:bg-gray-100 rounded ${pathname === '/boards/create-routes' ? 'selectedmenu' : 'text-gray-600'}`}>Create Routes</Link>
                </div>
              )}
              <button
                onClick={() => setSubMenuOpen(subMenuOpen === 'development-react-app' ? null : 'development-react-app')}
                className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between"
              >
                <span>Development React App</span>
                <MdKeyboardArrowRight
                  className={`transition-transform ${subMenuOpen === 'development-react-app' ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {subMenuOpen === 'development-react-app' && (
                <div className="ml-8 mt-1">
                  <Link href="/boards/development-react-app" className={`block p-2 hover:bg-gray-100 rounded ${pathname === '/boards/development-react-app' ? 'selectedmenu' : 'text-gray-600'}`}>Development React App</Link>
                </div>
              )}
              <button
                onClick={() => setSubMenuOpen(subMenuOpen === 'sport-xi-project' ? null : 'sport-xi-project')}
                className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between"
              >
                <span>Sport Xi Project</span>
                <MdKeyboardArrowRight
                  className={`transition-transform ${subMenuOpen === 'sport-xi-project' ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {subMenuOpen === 'sport-xi-project' && (
                <div className="ml-8 mt-1">
                  <Link href="/boards/sport-xi-project" className={`block p-2 hover:bg-gray-100 rounded ${pathname === '/boards/sport-xi-project' ? 'selectedmenu' : 'text-gray-600'}`}>Sport Xi Project</Link>
                </div>
              )}
              <button
                onClick={() => setSubMenuOpen(subMenuOpen === 'wordpress-theme' ? null : 'wordpress-theme')}
                className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between"
              >
                <span>Wordpress Theme</span>
                <MdKeyboardArrowRight
                  className={`transition-transform ${subMenuOpen === 'wordpress-theme' ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {subMenuOpen === 'wordpress-theme' && (
                <div className="ml-8 mt-1">
                  <Link href="/boards/wordpress-theme" className={`block p-2 hover:bg-gray-100 rounded ${pathname === '/boards/wordpress-theme' ? 'selectedmenu' : 'text-gray-600'}`}>Wordpress Theme</Link>
                </div>
              )}
            </div>
          )}
        </li>
        <li>
          <Link
            href="/messages"
            className={`block p-2 hover:bg-gray-100 rounded flex items-center ${pathname === '/messages' ? 'selectedmenu' : ''}`}
          >
            <AiOutlineMessage size={18} className="mr-2" /> Messages
            <span className="ml-2 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </Link>
        </li>
        <li>
          <Link
            href="/calendar"
            className={`block p-2 hover:bg-gray-100 rounded flex items-center ${pathname === '/calendar' ? 'selectedmenu' : ''}`}
          >
            <FaRegCalendarAlt size={18} className="mr-2" /> Calendar
          </Link>
        </li>
        <li>
          <Link
            href="/team-members"
            className={`block p-2 hover:bg-gray-100 rounded flex items-center ${pathname === '/team-members' ? 'selectedmenu' : ''}`}
          >
            <LuUserRound size={18} className="mr-2" /> Team Members
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-[12%] w-[90%]">
        <Link
          href="/support"
          className="block p-2 hover:bg-gray-100 rounded flex items-center text-gray-600"
        >
          <LuUserRound size={18} className="mr-2" /> Support
        </Link>
        <button className="w-full bg-gray-800 text-white p-2 rounded flex items-center justify-center mt-2">
          <span className="mr-2">Logout</span>
        </button>
      </div>
    </div>
  );
}