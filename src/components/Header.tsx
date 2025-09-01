import React from 'react';
import { Breadcrumb } from './Breadcrumb';

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarCollapsed }) => {
  return (
    <header 
      className="bg-bg-secondary border-b border-gray-700 px-6 py-4 fixed top-0 right-0 z-10 transition-all duration-300" 
      style={{ left: isSidebarCollapsed ? '64px' : '320px' }}
    >
      <div className="flex items-center justify-between min-w-0">
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          <button
            onClick={onToggleSidebar}
            className="text-gray-400 hover:text-white p-2 rounded-md hover:bg-gray-700 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="min-w-0 flex-1">
            <Breadcrumb />
          </div>
        </div>
        
        <div className="text-primary font-semibold text-sm whitespace-nowrap ml-4">
          ShareACart Wireframe
        </div>
      </div>
    </header>
  );
};
