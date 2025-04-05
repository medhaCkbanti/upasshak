import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
};

export default Admin;