import React from 'react';
import { SitemapSummary } from '../../types/sitemap';

interface SummarySectionProps {
  summary: SitemapSummary;
  onExportPDF: () => void;
  onExportJSON: () => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({
  summary,
  onExportPDF,
  onExportJSON
}) => {
  return (
    <div className="bg-bg-secondary rounded-lg p-6 sticky bottom-0">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-primary">Sitemap Summary</h2>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onExportJSON}
            className="px-4 py-2 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition-colors text-sm"
          >
            Export JSON
          </button>
          <button
            onClick={onExportPDF}
            className="px-4 py-2 bg-primary text-black font-medium rounded-md hover:bg-yellow-500 transition-colors text-sm"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Page Counts */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white mb-1">{summary.totalCounts.customer}</div>
          <div className="text-sm text-gray-300">Customer Pages</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white mb-1">{summary.totalCounts.vendor}</div>
          <div className="text-sm text-gray-300">Vendor Pages</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white mb-1">{summary.totalCounts.admin}</div>
          <div className="text-sm text-gray-300">Admin Pages</div>
        </div>
        <div className="bg-primary rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-black mb-1">{summary.totalCounts.total}</div>
          <div className="text-sm text-black font-medium">Total Pages</div>
        </div>
      </div>

      {/* Page Lists */}
      <div className="space-y-6">
        {/* Row 1: Included and Excluded */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Included Pages */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Included Pages ({summary.included.length})
            </h3>
            <div className="max-h-40 overflow-y-auto space-y-2">
              {summary.included.length === 0 ? (
                <p className="text-gray-400 text-sm">No pages selected</p>
              ) : (
                summary.included.map(page => (
                  <div key={page.id} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate">{page.label}</span>
                        {page.isCustom && (
                          <span className="px-2 py-0.5 text-xs bg-primary text-black rounded flex-shrink-0">Custom</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Excluded Pages */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              Excluded Pages ({summary.excluded.length})
            </h3>
            <div className="max-h-40 overflow-y-auto space-y-2">
              {summary.excluded.length === 0 ? (
                <p className="text-gray-400 text-sm">No pages excluded</p>
              ) : (
                summary.excluded.map(page => (
                  <div key={page.id} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="truncate line-through">{page.label}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Row 2: Added Pages (full width if there are any) */}
        {summary.added.length > 0 && (
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              Added Pages ({summary.added.length})
            </h3>
            <div className="max-h-40 overflow-y-auto space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {summary.added.map(page => (
                  <div key={page.id} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate">{page.label}</span>
                        <span className="px-2 py-0.5 text-xs bg-primary text-black rounded flex-shrink-0">New</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-gray-600">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
          <span className="whitespace-nowrap">✅ {summary.included.length} Included</span>
          <span className="whitespace-nowrap">❌ {summary.excluded.length} Excluded</span>
          <span className="whitespace-nowrap">➕ {summary.added.length} Added</span>
          <span className="text-primary font-medium whitespace-nowrap">📊 {summary.totalCounts.total} Total Pages</span>
        </div>
      </div>
    </div>
  );
};
