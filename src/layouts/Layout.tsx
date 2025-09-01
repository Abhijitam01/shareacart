import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export const Layout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <Header onToggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
      
      <main 
        className="transition-all duration-300 pt-20 p-6"
        style={{ 
          marginLeft: isSidebarCollapsed ? '64px' : '320px' 
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};
