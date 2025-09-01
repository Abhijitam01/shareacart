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
    <div className="space-y-4">
      {portals.map(portal => (
        <div key={portal.id} className="bg-bg-secondary rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={() => onTogglePortal(portal.id)}
              className="flex items-center space-x-2 text-primary font-semibold text-lg hover:text-yellow-400"
            >
              <svg
                className={`w-5 h-5 transition-transform ${
                  portal.isExpanded ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>{portal.label}</span>
            </button>
            <span className="text-gray-400 text-sm">
              ({portal.sections.reduce((total, section) => total + section.pages.length, 0)} pages)
            </span>
          </div>

          {portal.isExpanded && (
            <div className="ml-6 space-y-3">
              {portal.sections.map(section => (
                <div key={section.id}>
                  <button
                    onClick={() => onToggleSection(portal.id, section.id)}
                    className="flex items-center space-x-2 text-white font-medium mb-2 hover:text-primary"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        section.isExpanded ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{section.label}</span>
                    <span className="text-gray-400 text-xs">({section.pages.length})</span>
                  </button>

                  {section.isExpanded && (
                    <div className="ml-6 space-y-2">
                      {section.pages.map(page => (
                        <div
                          key={page.id}
                          className={`flex items-start space-x-3 p-2 rounded-md transition-colors ${
                            page.isSelected ? 'bg-gray-700' : 'bg-gray-800'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={page.isSelected}
                            onChange={() => onTogglePage(portal.id, section.id, page.id)}
                            className="mt-1 w-4 h-4 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <span
                                className={`font-medium ${
                                  page.isSelected ? 'text-white' : 'text-gray-400'
                                }`}
                              >
                                {page.label}
                              </span>
                              {page.isCustom && (
                                <span className="px-2 py-1 text-xs bg-primary text-black rounded-full">
                                  Custom
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-sm mt-1 ${
                                page.isSelected ? 'text-gray-300' : 'text-gray-500'
                              }`}
                            >
                              {page.description}
                            </p>
                            <p className="text-xs text-gray-500 mt-1 font-mono">
                              {page.path}
                            </p>
                          </div>
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
