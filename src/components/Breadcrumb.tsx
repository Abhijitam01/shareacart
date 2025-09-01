import React from 'react';
import { useLocation } from 'react-router-dom';
import { NAVIGATION_DATA } from '../types/navigation';

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbItems = () => {
    const breadcrumbs: { label: string; icon?: string }[] = [];
    
    // Handle special routes
    if (pathSegments[0] === 'sitemap-approval') {
      breadcrumbs.push({ label: 'Sitemap Approval Tool', icon: '📋' });
      return breadcrumbs;
    }
    
    if (pathSegments.length >= 1) {
      const portal = NAVIGATION_DATA.find(p => p.id === pathSegments[0]);
      if (portal) {
        const icons = { customer: '👤', vendor: '🏪', admin: '⚡' };
        breadcrumbs.push({ 
          label: portal.label, 
          icon: icons[portal.id as keyof typeof icons] 
        });
      }
    }
    
    if (pathSegments.length >= 2) {
      const portal = NAVIGATION_DATA.find(p => p.id === pathSegments[0]);
      const section = portal?.sections.find(s => s.id === pathSegments[1]);
      if (section) {
        breadcrumbs.push({ label: section.label });
      }
    }
    
    if (pathSegments.length >= 3) {
      const portal = NAVIGATION_DATA.find(p => p.id === pathSegments[0]);
      const section = portal?.sections.find(s => s.id === pathSegments[1]);
      const item = section?.items.find(i => i.path.endsWith(pathSegments[2]));
      if (item) {
        breadcrumbs.push({ label: item.label });
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbItems();

  if (breadcrumbs.length === 0) {
    return (
      <nav className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
          <span className="text-lg">🏠</span>
          <span className="text-primary font-medium text-sm">Home</span>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          <div 
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${
              index === breadcrumbs.length - 1 
                ? 'bg-primary/20 border border-primary/30 text-primary font-medium shadow-sm' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {item.icon && <span className="text-base">{item.icon}</span>}
            <span className="whitespace-nowrap">{item.label}</span>
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};
