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
      {/* Header */}
      <div className="bg-bg-secondary border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-2">Interactive Sitemap Approval Tool</h1>
          <p className="text-gray-300">
            Review, modify, and approve the complete ShareACart platform structure. 
            Use checkboxes to include/exclude pages and add custom pages as needed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Tree View */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Sitemap Structure</h2>
              <p className="text-gray-400 mb-6">
                Expand sections to view pages. Check/uncheck pages to include or exclude them from the final sitemap.
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
              <h2 className="text-2xl font-bold text-white mb-4">Add Custom Page</h2>
              <AddPageForm onAddPage={handleAddPage} />
            </div>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
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
