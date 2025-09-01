import React from 'react';
import { useLocation } from 'react-router-dom';
import { NAVIGATION_DATA } from '../types/navigation';

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbItems = () => {
    const breadcrumbs: string[] = [];
    
    if (pathSegments.length >= 1) {
      const portal = NAVIGATION_DATA.find(p => p.id === pathSegments[0]);
      if (portal) {
        breadcrumbs.push(portal.label);
      }
    }
    
    if (pathSegments.length >= 2) {
      const portal = NAVIGATION_DATA.find(p => p.id === pathSegments[0]);
      const section = portal?.sections.find(s => s.id === pathSegments[1]);
      if (section) {
        breadcrumbs.push(section.label);
      }
    }
    
    if (pathSegments.length >= 3) {
      const portal = NAVIGATION_DATA.find(p => p.id === pathSegments[0]);
      const section = portal?.sections.find(s => s.id === pathSegments[1]);
      const item = section?.items.find(i => i.path.endsWith(pathSegments[2]));
      if (item) {
        breadcrumbs.push(item.label);
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbItems();

  return (
    <nav className="text-gray-400 text-sm mb-4">
      {breadcrumbs.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="mx-2">→</span>}
          <span className={index === breadcrumbs.length - 1 ? 'text-primary font-medium' : ''}>
            {item}
          </span>
        </span>
      ))}
    </nav>
  );
};
