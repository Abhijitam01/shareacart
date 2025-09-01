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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Sitemap Summary</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={onExportJSON}
            className="px-3 py-2 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition-colors text-sm whitespace-nowrap"
          >
            Export JSON
          </button>
          <button
            onClick={onExportPDF}
            className="px-3 py-2 bg-primary text-black font-medium rounded-md hover:bg-yellow-500 transition-colors text-sm whitespace-nowrap"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Page Counts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-gray-700 rounded-lg p-3 text-center min-w-0">
          <div className="text-xl font-bold text-white">{summary.totalCounts.customer}</div>
          <div className="text-xs text-gray-300 truncate">Customer</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-3 text-center min-w-0">
          <div className="text-xl font-bold text-white">{summary.totalCounts.vendor}</div>
          <div className="text-xs text-gray-300 truncate">Vendor</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-3 text-center min-w-0">
          <div className="text-xl font-bold text-white">{summary.totalCounts.admin}</div>
          <div className="text-xs text-gray-300 truncate">Admin</div>
        </div>
        <div className="bg-primary rounded-lg p-3 text-center min-w-0">
          <div className="text-xl font-bold text-black">{summary.totalCounts.total}</div>
          <div className="text-xs text-black font-medium truncate">Total</div>
        </div>
      </div>

      {/* Page Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Included Pages */}
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white mb-3 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
            <span className="truncate">Included Pages ({summary.included.length})</span>
          </h3>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {summary.included.length === 0 ? (
              <p className="text-gray-400 text-sm">No pages selected</p>
            ) : (
              summary.included.map(page => (
                <div key={page.id} className="text-sm text-gray-300 flex items-center min-w-0">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="truncate flex-1">{page.label}</span>
                  {page.isCustom && (
                    <span className="ml-1 px-1 py-0.5 text-xs bg-primary text-black rounded flex-shrink-0">Custom</span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Excluded Pages */}
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white mb-3 flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
            <span className="truncate">Excluded Pages ({summary.excluded.length})</span>
          </h3>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {summary.excluded.length === 0 ? (
              <p className="text-gray-400 text-sm">No pages excluded</p>
            ) : (
              summary.excluded.map(page => (
                <div key={page.id} className="text-sm text-gray-400 flex items-center min-w-0">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="truncate line-through flex-1">{page.label}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Added Pages */}
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white mb-3 flex items-center">
            <span className="w-3 h-3 bg-primary rounded-full mr-2 flex-shrink-0"></span>
            <span className="truncate">Added Pages ({summary.added.length})</span>
          </h3>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {summary.added.length === 0 ? (
              <p className="text-gray-400 text-sm">No custom pages added</p>
            ) : (
              summary.added.map(page => (
                <div key={page.id} className="text-sm text-gray-300 flex items-center min-w-0">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                  <span className="truncate flex-1">{page.label}</span>
                  <span className="ml-1 px-1 py-0.5 text-xs bg-primary text-black rounded flex-shrink-0">New</span>
                </div>
              ))
            )}
          </div>
        </div>
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
