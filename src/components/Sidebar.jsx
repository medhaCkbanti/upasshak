import React from "react";
import addIcon from "../assets/add_icon.png";
import ListIcon from "../assets/order_icon.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full md:w-[18%] min-h-screen border border-t-0 border-gray-400 text-[max(1vw,10px)]">
      <div className="pt-[50px] pl-[5%] md:pl-[20%] flex flex-col gap-5">
        {/* Add Blog */}

        <NavLink
          to="/admin/addBlog"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={addIcon} alt="Add Blog" className="w-5 h-5" />
          <p>Add Blog</p>
        </NavLink>

        
      

        {/* Add Student */}
        <NavLink
          to="/admin/addStudent"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={addIcon} alt="Add Student" className="w-5 h-5" />
          <p>Add Student</p>
        </NavLink>

        {/* Add Images */}
        <NavLink
          to="/admin/addImages"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={addIcon} alt="Add Images" className="w-5 h-5" />
          <p>Add Images</p>
        </NavLink>

        {/* Add Videos */}
        <NavLink
          to="/admin/addVideos"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={addIcon} alt="Add Videos" className="w-5 h-5" />
          <p>Add Videos</p>
        </NavLink>

           {/* All BLogs */}
           <NavLink
          to="/admin/allBlogs"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={ListIcon} alt="Add Student" className="w-5 h-5" />
          <p> All Blogs </p>
        </NavLink>


        {/* All Students */}
        <NavLink
          to="/admin/allStudents"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={ListIcon} alt="All Students" className="w-5 h-5" />
          <p>All Students</p>
        </NavLink>

        {/* All Images */}
        <NavLink
          to="/admin/allImages"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={ListIcon} alt="All Images" className="w-5 h-5" />
          <p>All Images</p>
        </NavLink>

        {/* All Videos */}
        <NavLink
          to="/admin/allVideos"
          className={({ isActive }) =>
            `flex gap-3 items-center border border-r-0 border-gray-400 py-2 px-3 rounded-l-md cursor-pointer hover:bg-gray-100 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <img src={ListIcon} alt="All Videos" className="w-5 h-5" />
          <p>All Videos</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;