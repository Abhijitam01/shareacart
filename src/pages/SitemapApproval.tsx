import React, { useState, useEffect } from 'react';
import { TreeView } from '../components/sitemap/TreeView';
import { AddPageForm } from '../components/sitemap/AddPageForm';
import { SummarySection } from '../components/sitemap/SummarySection';
import { SitemapPortal, SitemapSummary, NewPageForm } from '../types/sitemap';
import { initializeSitemapData, generatePageId, generatePagePath } from '../utils/sitemapData';
import { exportToJSON, exportToPDF } from '../utils/exportUtils';

export const SitemapApproval: React.FC = () => {
  const [portals, setPortals] = useState<SitemapPortal[]>([]);
  const [summary, setSummary] = useState<SitemapSummary>({
    included: [],
    excluded: [],
    added: [],
    totalCounts: { customer: 0, vendor: 0, admin: 0, total: 0 }
  });

  // Initialize data on component mount
  useEffect(() => {
    const initialData = initializeSitemapData();
    setPortals(initialData);
  }, []);

  // Update summary whenever portals change
  useEffect(() => {
    const included = portals.flatMap(portal =>
      portal.sections.flatMap(section =>
        section.pages.filter(page => page.isSelected)
      )
    );

    const excluded = portals.flatMap(portal =>
      portal.sections.flatMap(section =>
        section.pages.filter(page => !page.isSelected)
      )
    );

    const added = included.filter(page => page.isCustom);

    // Count pages by portal
    const customerPages = portals.find(p => p.id === 'customer')?.sections.flatMap(s => s.pages.filter(p => p.isSelected)) || [];
    const vendorPages = portals.find(p => p.id === 'vendor')?.sections.flatMap(s => s.pages.filter(p => p.isSelected)) || [];
    const adminPages = portals.find(p => p.id === 'admin')?.sections.flatMap(s => s.pages.filter(p => p.isSelected)) || [];

    setSummary({
      included,
      excluded,
      added,
      totalCounts: {
        customer: customerPages.length,
        vendor: vendorPages.length,
        admin: adminPages.length,
        total: included.length
      }
    });
  }, [portals]);

  const handleTogglePortal = (portalId: string) => {
    setPortals(prev => prev.map(portal =>
      portal.id === portalId
        ? { ...portal, isExpanded: !portal.isExpanded }
        : portal
    ));
  };

  const handleToggleSection = (portalId: string, sectionId: string) => {
    setPortals(prev => prev.map(portal =>
      portal.id === portalId
        ? {
            ...portal,
            sections: portal.sections.map(section =>
              section.id === sectionId
                ? { ...section, isExpanded: !section.isExpanded }
                : section
            )
          }
        : portal
    ));
  };

  const handleTogglePage = (portalId: string, sectionId: string, pageId: string) => {
    setPortals(prev => prev.map(portal =>
      portal.id === portalId
        ? {
            ...portal,
            sections: portal.sections.map(section =>
              section.id === sectionId
                ? {
                    ...section,
                    pages: section.pages.map(page =>
                      page.id === pageId
                        ? { ...page, isSelected: !page.isSelected }
                        : page
                    )
                  }
                : section
            )
          }
        : portal
    ));
  };

  const handleAddPage = (pageData: NewPageForm) => {
    const pageId = generatePageId(pageData.name);
    const pagePath = generatePagePath(pageData.portal, pageData.name);

    const newPage = {
      id: pageId,
      label: pageData.name,
      description: pageData.description,
      path: pagePath,
      isSelected: true,
      isCustom: true
    };

    setPortals(prev => prev.map(portal => {
      if (portal.id === pageData.portal) {
        // Add to the first section or create a "Custom" section
        const customSectionId = 'custom';
        const existingCustomSection = portal.sections.find(s => s.id === customSectionId);

        if (existingCustomSection) {
          return {
            ...portal,
            sections: portal.sections.map(section =>
              section.id === customSectionId
                ? { ...section, pages: [...section.pages, newPage] }
                : section
            )
          };
        } else {
          return {
            ...portal,
            sections: [
              ...portal.sections,
              {
                id: customSectionId,
                label: 'Custom Pages',
                pages: [newPage],
                isExpanded: true
              }
            ]
          };
        }
      }
      return portal;
    }));
  };

  const handleExportJSON = () => {
    exportToJSON(summary, portals);
  };

  const handleExportPDF = () => {
    exportToPDF(summary, portals);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white">
      {/* Mobile-Optimized Header */}
      <div className="bg-bg-secondary border-b border-gray-700 px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2 leading-tight">
            Interactive Sitemap Tool
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">
            Review and approve the ShareACart platform structure
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
          {/* Main Content - Tree View */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                Sitemap Structure
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                Tap to expand sections and toggle page selections
              </p>
              <TreeView
                portals={portals}
                onTogglePortal={handleTogglePortal}
                onToggleSection={handleToggleSection}
                onTogglePage={handleTogglePage}
              />
            </div>

            {/* Add Page Form */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                Add Custom Page
              </h2>
              <AddPageForm onAddPage={handleAddPage} />
            </div>
          </div>

          {/* Mobile-First Summary Panel */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="lg:sticky lg:top-20">
              <SummarySection
                summary={summary}
                onExportPDF={handleExportPDF}
                onExportJSON={handleExportJSON}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
