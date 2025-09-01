import React from 'react';
import { Breadcrumb } from './Breadcrumb';

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarCollapsed }) => {
  return (
    <header 
      className="glass border-b border-white/10 backdrop-blur-xl px-6 py-4 fixed top-0 right-0 z-10 transition-all duration-500" 
      style={{ left: isSidebarCollapsed ? '64px' : '320px' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="group relative p-3 rounded-xl text-gray-400 hover:text-white hover:bg-bg-hover transition-all duration-300"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isSidebarCollapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
            <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
          <div className="h-8 w-px bg-white/10"></div>
          <Breadcrumb />
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Status Indicator */}
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-green/20 border border-accent-green/30">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
            <span className="text-accent-green text-xs font-medium">Live</span>
          </div>
          
          {/* App Title */}
          <div className="text-right">
            <div className="text-gradient font-bold text-lg">ShareACart</div>
            <div className="text-gray-400 text-xs">Wireframe Tool</div>
          </div>
        </div>
      </div>
    </header>
  );
};
