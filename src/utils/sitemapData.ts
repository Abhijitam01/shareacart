import { SitemapPortal } from '../types/sitemap';
import { NAVIGATION_DATA } from '../types/navigation';

export const initializeSitemapData = (): SitemapPortal[] => {
  return NAVIGATION_DATA.map(portal => ({
    id: portal.id,
    label: portal.label,
    isExpanded: true,
    sections: portal.sections.map(section => ({
      id: section.id,
      label: section.label,
      isExpanded: true,
      pages: section.items.map(item => ({
        id: item.id,
        label: item.label,
        description: item.description,
        path: item.path,
        isSelected: true,
        isCustom: false
      }))
    }))
  }));
};

export const generatePageId = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

export const generatePagePath = (portal: string, name: string): string => {
  const pageId = generatePageId(name);
  return `/${portal}/custom/${pageId}`;
};
