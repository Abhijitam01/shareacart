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
    <div className="bg-bg-secondary rounded-xl p-3 sm:p-4 lg:p-6 lg:sticky lg:top-20 shadow-lg border border-gray-700">
      <div className="mb-3 sm:mb-4 lg:mb-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-primary">Summary</h2>
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Live</span>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
          <button
            onClick={onExportJSON}
            className="btn-mobile px-3 sm:px-4 py-2.5 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 text-sm w-full xs:w-auto flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            <span>JSON</span>
          </button>
          <button
            onClick={onExportPDF}
            className="btn-mobile px-3 sm:px-4 py-2.5 bg-primary text-black font-medium rounded-lg hover:bg-yellow-500 text-sm w-full xs:w-auto flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Mobile-Optimized Page Counts */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
        <div className="card-mobile bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-3 sm:p-4 text-center border border-gray-600">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 text-smooth">{summary.totalCounts.customer}</div>
          <div className="text-xs sm:text-sm text-gray-300">Customer</div>
          <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
            <div className="bg-blue-500 h-1 rounded-full" style={{width: `${(summary.totalCounts.customer / summary.totalCounts.total) * 100}%`}}></div>
          </div>
        </div>
        <div className="card-mobile bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-3 sm:p-4 text-center border border-gray-600">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 text-smooth">{summary.totalCounts.vendor}</div>
          <div className="text-xs sm:text-sm text-gray-300">Vendor</div>
          <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
            <div className="bg-green-500 h-1 rounded-full" style={{width: `${(summary.totalCounts.vendor / summary.totalCounts.total) * 100}%`}}></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
        <div className="card-mobile bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-3 sm:p-4 text-center border border-gray-600">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 text-smooth">{summary.totalCounts.admin}</div>
          <div className="text-xs sm:text-sm text-gray-300">Admin</div>
          <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
            <div className="bg-purple-500 h-1 rounded-full" style={{width: `${(summary.totalCounts.admin / summary.totalCounts.total) * 100}%`}}></div>
          </div>
        </div>
        <div className="card-mobile bg-gradient-to-br from-primary to-yellow-500 rounded-xl p-3 sm:p-4 text-center border border-yellow-600 shadow-lg">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-1">{summary.totalCounts.total}</div>
          <div className="text-xs sm:text-sm text-black font-medium">Total Pages</div>
          <div className="w-full bg-yellow-600 rounded-full h-1 mt-2">
            <div className="bg-black h-1 rounded-full w-full"></div>
          </div>
        </div>
      </div>

      {/* Page Lists */}
      <div className="space-y-4 sm:space-y-6">
        {/* Row 1: Included and Excluded */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {/* Included Pages */}
          <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="truncate">Included ({summary.included.length})</span>
            </h3>
            <div className="max-h-32 sm:max-h-40 overflow-y-auto space-y-1 sm:space-y-2">
              {summary.included.length === 0 ? (
                <p className="text-gray-400 text-xs sm:text-sm">No pages selected</p>
              ) : (
                summary.included.map(page => (
                  <div key={page.id} className="text-xs sm:text-sm text-gray-300 flex items-start gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start sm:items-center gap-1 sm:gap-2 flex-col sm:flex-row">
                        <span className="truncate text-xs sm:text-sm">{page.label}</span>
                        {page.isCustom && (
                          <span className="px-1.5 py-0.5 text-xs bg-primary text-black rounded flex-shrink-0">Custom</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Excluded Pages */}
          <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="truncate">Excluded ({summary.excluded.length})</span>
            </h3>
            <div className="max-h-32 sm:max-h-40 overflow-y-auto space-y-1 sm:space-y-2">
              {summary.excluded.length === 0 ? (
                <p className="text-gray-400 text-xs sm:text-sm">No pages excluded</p>
              ) : (
                summary.excluded.map(page => (
                  <div key={page.id} className="text-xs sm:text-sm text-gray-400 flex items-start gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="truncate line-through text-xs sm:text-sm">{page.label}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Row 2: Added Pages (full width if there are any) */}
        {summary.added.length > 0 && (
          <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="truncate">Added ({summary.added.length})</span>
            </h3>
            <div className="max-h-32 sm:max-h-40 overflow-y-auto space-y-1 sm:space-y-2">
              <div className="grid grid-cols-1 gap-2 sm:gap-4">
                {summary.added.map(page => (
                  <div key={page.id} className="text-xs sm:text-sm text-gray-300 flex items-start gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start sm:items-center gap-1 sm:gap-2 flex-col sm:flex-row">
                        <span className="truncate text-xs sm:text-sm">{page.label}</span>
                        <span className="px-1.5 py-0.5 text-xs bg-primary text-black rounded flex-shrink-0">New</span>
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
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-600">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
          <span className="whitespace-nowrap">✅ {summary.included.length}</span>
          <span className="whitespace-nowrap">❌ {summary.excluded.length}</span>
          <span className="whitespace-nowrap">➕ {summary.added.length}</span>
          <span className="text-primary font-medium whitespace-nowrap">📊 {summary.totalCounts.total}</span>
        </div>
      </div>
    </div>
  );
};
