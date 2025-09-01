import React from 'react';
import { SitemapPortal } from '../../types/sitemap';

interface TreeViewProps {
  portals: SitemapPortal[];
  onTogglePortal: (portalId: string) => void;
  onToggleSection: (portalId: string, sectionId: string) => void;
  onTogglePage: (portalId: string, sectionId: string, pageId: string) => void;
}

export const TreeView: React.FC<TreeViewProps> = ({
  portals,
  onTogglePortal,
  onToggleSection,
  onTogglePage
}) => {
  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      {portals.map(portal => (
        <div key={portal.id} className="bg-bg-secondary rounded-xl p-3 sm:p-4 border border-gray-700 shadow-sm">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 lg:mb-4">
            <button
              onClick={() => onTogglePortal(portal.id)}
              className="btn-mobile flex items-center space-x-1 sm:space-x-2 text-primary font-semibold text-sm sm:text-base lg:text-lg hover:text-yellow-400 min-w-0 flex-1 p-2 rounded-lg touch-none"
            >
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 expand-smooth flex-shrink-0 ${
                  portal.isExpanded ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="truncate">{portal.label}</span>
              <div className="ml-auto flex items-center space-x-1">
                <span className="text-xs bg-primary text-black px-2 py-0.5 rounded-full font-medium">
                  {portal.sections.reduce((total, section) => total + section.pages.length, 0)}
                </span>
              </div>
            </button>
          </div>

          {portal.isExpanded && (
            <div className="ml-2 sm:ml-4 lg:ml-6 space-y-1 sm:space-y-2 lg:space-y-3 expand-smooth">
              {portal.sections.map(section => (
                <div key={section.id} className="bg-gray-800 rounded-lg p-2 sm:p-3 border border-gray-600">
                  <button
                    onClick={() => onToggleSection(portal.id, section.id)}
                    className="btn-mobile flex items-center space-x-1 sm:space-x-2 text-white font-medium mb-1 sm:mb-2 hover:text-primary min-w-0 w-full text-left p-2 rounded-md touch-none"
                  >
                    <svg
                      className={`w-3 h-3 sm:w-4 sm:h-4 expand-smooth flex-shrink-0 ${
                        section.isExpanded ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="truncate flex-1 text-sm sm:text-base">{section.label}</span>
                    <span className="text-xs bg-gray-600 text-gray-300 px-2 py-0.5 rounded-full flex-shrink-0">
                      {section.pages.length}
                    </span>
                  </button>

                  {section.isExpanded && (
                    <div className="ml-1 sm:ml-2 lg:ml-4 space-y-1 sm:space-y-2 expand-smooth">
                      {section.pages.map(page => (
                        <div
                          key={page.id}
                          className={`card-mobile flex items-start space-x-2 sm:space-x-3 p-3 rounded-lg border transition-all duration-200 ${
                            page.isSelected 
                              ? 'bg-gradient-to-r from-gray-700 to-gray-600 border-primary shadow-sm' 
                              : 'bg-gray-900 border-gray-700 hover:border-gray-600'
                          }`}
                        >
                          <label className="flex items-start space-x-2 sm:space-x-3 cursor-pointer w-full touch-none">
                            <input
                              type="checkbox"
                              checked={page.isSelected}
                              onChange={() => onTogglePage(portal.id, section.id, page.id)}
                              className="checkbox-mobile mt-1 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start sm:items-center space-x-1 sm:space-x-2 flex-col sm:flex-row mb-1">
                                <span
                                  className={`font-medium text-sm sm:text-base text-smooth ${
                                    page.isSelected ? 'text-white' : 'text-gray-300'
                                  }`}
                                >
                                  {page.label}
                                </span>
                                {page.isCustom && (
                                  <span className="px-2 py-0.5 text-xs bg-primary text-black rounded-full flex-shrink-0 font-medium">
                                    Custom
                                  </span>
                                )}
                              </div>
                              <p
                                className={`text-xs sm:text-sm text-smooth leading-relaxed ${
                                  page.isSelected ? 'text-gray-300' : 'text-gray-400'
                                }`}
                              >
                                {page.description}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 font-mono truncate opacity-75">
                                {page.path}
                              </p>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
