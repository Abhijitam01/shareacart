import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_DATA } from '../types/navigation';

interface SidebarProps {
  isCollapsed: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const location = useLocation();
  const [expandedPortals, setExpandedPortals] = useState<Set<string>>(new Set(['customer', 'vendor', 'admin']));
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const togglePortal = (portalId: string) => {
    const newExpanded = new Set(expandedPortals);
    if (newExpanded.has(portalId)) {
      newExpanded.delete(portalId);
    } else {
      newExpanded.add(portalId);
    }
    setExpandedPortals(newExpanded);
  };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`bg-bg-secondary border-r border-gray-700 fixed left-0 top-0 h-screen z-20 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-80'
    } overflow-y-auto`}>
      <div className="p-4">
        <div className={`text-primary font-bold text-xl mb-4 ${isCollapsed ? 'text-center' : ''}`}>
          {isCollapsed ? 'S' : 'ShareACart'}
        </div>
        
        {!isCollapsed && (
          <Link
            to="/sitemap-approval"
            className={`block w-full mb-4 px-3 py-2 rounded-md text-sm font-medium text-center transition-colors ${
              location.pathname === '/sitemap-approval'
                ? 'bg-primary text-black'
                : 'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            📋 Sitemap Tool
          </Link>
        )}
        
        <nav className="space-y-2">
          {NAVIGATION_DATA.map((portal) => (
            <div key={portal.id} className="mb-4">
              <button
                onClick={() => togglePortal(portal.id)}
                className={`w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-700 text-left ${
                  location.pathname.startsWith(`/${portal.id}`) ? 'bg-gray-700 text-primary' : 'text-gray-300'
                }`}
              >
                <span className={`font-medium ${isCollapsed ? 'text-xs' : ''}`}>
                  {isCollapsed ? portal.label.charAt(0) : portal.label}
                </span>
                {!isCollapsed && (
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedPortals.has(portal.id) ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              {expandedPortals.has(portal.id) && !isCollapsed && (
                <div className="ml-4 mt-2 space-y-1">
                  {portal.sections.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-600 text-left text-sm text-gray-400"
                      >
                        <span>{section.label}</span>
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            expandedSections.has(section.id) ? 'rotate-90' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {expandedSections.has(section.id) && (
                        <div className="ml-4 mt-1 space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.id}
                              to={item.path}
                              className={`block p-2 rounded-md text-xs hover:bg-gray-600 ${
                                isActive(item.path)
                                  ? 'bg-primary text-black font-medium'
                                  : 'text-gray-500 hover:text-gray-300'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
