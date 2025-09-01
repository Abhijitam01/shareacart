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

  const getPortalIcon = (portalId: string) => {
    const icons = { customer: '👤', vendor: '🏪', admin: '⚡' };
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

  const relatedPages = getRelatedPages();
  const portal = NAVIGATION_DATA.find(p => p.id === portalId);
  const section = portal?.sections.find(s => s.id === sectionId);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="text-center py-8">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className={`w-16 h-16 bg-gradient-to-r ${getPortalGradient(portalId)} rounded-2xl flex items-center justify-center shadow-glow`}>
            <span className="text-white text-2xl">{getPortalIcon(portalId)}</span>
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gradient mb-2">{title}</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>{portal?.label}</span>
              <span>•</span>
              <span>{section?.label}</span>
            </div>
          </div>
        </div>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{description}</p>
      </div>

      {/* Page Information Card */}
      <div className="card p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="text-primary text-lg">ℹ️</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Page Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-gray-400 text-sm font-medium">Portal</div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">{getPortalIcon(portalId)}</span>
              <span className="text-white font-semibold">{portal?.label}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-gray-400 text-sm font-medium">Section</div>
            <div className="text-white font-semibold">{section?.label}</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-gray-400 text-sm font-medium">Current Path</div>
            <div className="text-primary font-mono text-sm bg-primary/10 px-2 py-1 rounded">
              {currentPath}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-gray-400 text-sm font-medium">Page Type</div>
            <div className="flex items-center space-x-2">
              <span className="badge-primary">Wireframe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <div className="card p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-accent-blue/20 rounded-lg flex items-center justify-center">
              <span className="text-accent-blue text-lg">🔗</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Related Pages in {section?.label}</h2>
            <span className="badge-primary">{relatedPages.length} pages</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.id}
                to={page.path}
                className="group card-hover p-4 block"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:bg-white transition-colors"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
                      {page.label}
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {page.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-center space-x-4 py-8">
        <Link
          to="/"
          className="btn-secondary"
        >
          ← Back to Home
        </Link>
        <Link
          to="/sitemap-approval"
          className="btn-primary"
        >
          📋 Open Sitemap Tool
        </Link>
      </div>
    </div>
  );
};
