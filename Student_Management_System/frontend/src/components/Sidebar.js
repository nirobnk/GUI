import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaUserGraduate, FaBook, FaChartBar, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-[#001F3F] flex flex-col justify-between shadow-lg">
      {/* Logo and Title */}
      <div className="py-6 text-center">
        <img src="/logo512.png" alt="Logo" className="mx-auto h-12 mb-2" />
        <h1 className="text-white text-xl font-bold">Student Management</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 mb-2 text-white ${isActive ? 'bg-blue-600' : 'hover:bg-blue-600'} rounded-md transition`
          }
        >
          <FaHome className="mr-3" />
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 mb-2 text-white ${isActive ? 'bg-blue-600' : 'hover:bg-blue-600'} rounded-md transition`
          }
        >
          <FaTachometerAlt className="mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 mb-2 text-white ${isActive ? 'bg-blue-600' : 'hover:bg-blue-600'} rounded-md transition`
          }
        >
          <FaUserGraduate className="mr-3" />
          Students
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 mb-2 text-white ${isActive ? 'bg-blue-600' : 'hover:bg-blue-600'} rounded-md transition`
          }
        >
          <FaBook className="mr-3" />
          Courses
        </NavLink>
        <NavLink
          to="/results"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 mb-2 text-white ${isActive ? 'bg-blue-600' : 'hover:bg-blue-600'} rounded-md transition`
          }
        >
          <FaChartBar className="mr-3" />
          Results
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="px-4 mb-6">
        <button
          className="flex items-center justify-center w-full py-3 text-white bg-red-500 hover:bg-red-600 rounded-md transition"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;