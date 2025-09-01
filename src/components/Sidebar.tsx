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

  const getPortalIcon = (portalId: string) => {
    const icons = {
      customer: '👤',
      vendor: '🏪', 
      admin: '⚡'
    };
    return icons[portalId as keyof typeof icons] || '📄';
  };

  const getPortalGradient = (portalId: string) => {
    const gradients = {
      customer: 'from-blue-500 to-cyan-500',
      vendor: 'from-green-500 to-emerald-500',
      admin: 'from-purple-500 to-pink-500'
    };
    return gradients[portalId as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };

  return (
    <aside className={`glass border-r border-white/10 fixed left-0 top-0 h-screen z-20 transition-all duration-500 ease-in-out ${
      isCollapsed ? 'w-16' : 'w-80'
    } overflow-hidden`}>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <h1 className="text-gradient font-bold text-xl">ShareACart</h1>
                <p className="text-gray-400 text-xs">Wireframe Tool</p>
              </div>
            )}
          </div>
        </div>

        {/* Sitemap Tool Button */}
        {!isCollapsed && (
          <div className="p-4 border-b border-white/10">
            <Link
              to="/sitemap-approval"
              className={`group relative overflow-hidden block w-full px-4 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-300 ${
                location.pathname === '/sitemap-approval'
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-gradient-to-r from-accent-green/20 to-accent-green/10 text-accent-green border border-accent-green/30 hover:from-accent-green/30 hover:to-accent-green/20 hover:shadow-lg'
              }`}
            >
              <div className="relative z-10 flex items-center justify-center space-x-2">
                <span>📋</span>
                <span>Sitemap Tool</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {NAVIGATION_DATA.map((portal) => (
            <div key={portal.id} className="animate-fade-in">
              <button
                onClick={() => togglePortal(portal.id)}
                className={`group w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  location.pathname.startsWith(`/${portal.id}`) 
                    ? `bg-gradient-to-r ${getPortalGradient(portal.id)} text-white shadow-lg` 
                    : 'text-gray-300 hover:bg-bg-hover hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{getPortalIcon(portal.id)}</span>
                  {!isCollapsed && (
                    <span className="font-medium">
                      {portal.label}
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <svg
                    className={`w-4 h-4 transition-all duration-300 ${
                      expandedPortals.has(portal.id) ? 'rotate-90 text-white' : 'group-hover:rotate-45'
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
                <div className="ml-6 mt-2 space-y-1 animate-slide-in">
                  {portal.sections.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="group w-full flex items-center justify-between p-2 rounded-lg hover:bg-bg-hover text-left text-sm text-gray-400 hover:text-gray-200 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-primary transition-colors duration-200"></div>
                          <span>{section.label}</span>
                        </div>
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
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
                        <div className="ml-6 mt-1 space-y-1 animate-fade-in">
                          {section.items.map((item) => (
                            <Link
                              key={item.id}
                              to={item.path}
                              className={`group relative block p-2 pl-4 rounded-lg text-xs transition-all duration-200 ${
                                isActive(item.path)
                                  ? 'bg-gradient-primary text-white font-medium shadow-glow'
                                  : 'text-gray-500 hover:text-gray-300 hover:bg-bg-hover'
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                  isActive(item.path) ? 'bg-white' : 'bg-gray-600 group-hover:bg-primary'
                                }`}></div>
                                <span className="truncate">{item.label}</span>
                              </div>
                              {isActive(item.path) && (
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white rounded-r-full"></div>
                              )}
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

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-white/10">
            <div className="text-center text-xs text-gray-500">
              <p>v1.0.0 • Enhanced UI</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
