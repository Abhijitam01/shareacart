import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_DATA } from '../types/navigation';

interface PageTemplateProps {
  title: string;
  description: string;
  portalId: string;
  sectionId: string;
  currentPath: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ 
  title, 
  description, 
  portalId, 
  sectionId, 
  currentPath 
}) => {
  const getRelatedPages = () => {
    const portal = NAVIGATION_DATA.find(p => p.id === portalId);
    const section = portal?.sections.find(s => s.id === sectionId);
    return section?.items.filter(item => item.path !== currentPath) || [];
  };

  const relatedPages = getRelatedPages();

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>

      <div className="bg-bg-secondary rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Page Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Portal:</span>
            <span className="ml-2 text-white">{NAVIGATION_DATA.find(p => p.id === portalId)?.label}</span>
          </div>
          <div>
            <span className="text-gray-400">Section:</span>
            <span className="ml-2 text-white">
              {NAVIGATION_DATA.find(p => p.id === portalId)?.sections.find(s => s.id === sectionId)?.label}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Current Path:</span>
            <span className="ml-2 text-primary font-mono">{currentPath}</span>
          </div>
          <div>
            <span className="text-gray-400">Page Type:</span>
            <span className="ml-2 text-white">Wireframe Prototype</span>
          </div>
        </div>
      </div>

      {relatedPages.length > 0 && (
        <div className="bg-bg-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Related Pages in This Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedPages.map((page) => (
              <Link
                key={page.id}
                to={page.path}
                className="block p-3 rounded-md border border-gray-600 hover:border-primary hover:bg-gray-700 transition-all"
              >
                <div className="text-white font-medium mb-1">{page.label}</div>
                <div className="text-gray-400 text-xs">{page.description}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
