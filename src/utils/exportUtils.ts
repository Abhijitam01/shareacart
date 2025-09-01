import { SitemapSummary, SitemapPortal } from '../types/sitemap';

export const exportToJSON = (summary: SitemapSummary, portals: SitemapPortal[]) => {
  const exportData = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: summary.totalCounts.total,
      includedPages: summary.included.length,
      excludedPages: summary.excluded.length,
      addedPages: summary.added.length,
      portalCounts: summary.totalCounts
    },
    pages: {
      included: summary.included.map(page => ({
        name: page.label,
        description: page.description,
        path: page.path,
        isCustom: page.isCustom || false
      })),
      excluded: summary.excluded.map(page => ({
        name: page.label,
        description: page.description,
        path: page.path,
        isCustom: page.isCustom || false
      })),
      added: summary.added.map(page => ({
        name: page.label,
        description: page.description,
        path: page.path,
        isCustom: true
      }))
    },
    fullSitemap: portals.map(portal => ({
      portal: portal.label,
      sections: portal.sections.map(section => ({
        section: section.label,
        pages: section.pages.map(page => ({
          name: page.label,
          description: page.description,
          path: page.path,
          included: page.isSelected,
          isCustom: page.isCustom || false
        }))
      }))
    }))
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: 'application/json'
  });
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `shareacart-sitemap-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportToPDF = (summary: SitemapSummary, portals: SitemapPortal[]) => {
  // Create a comprehensive HTML document for PDF conversion
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>ShareACart Sitemap Approval</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          margin: 40px; 
          line-height: 1.6; 
          color: #333;
        }
        .header { 
          text-align: center; 
          margin-bottom: 40px; 
          border-bottom: 3px solid #FFD700; 
          padding-bottom: 20px;
        }
        .header h1 { 
          color: #000; 
          margin: 0; 
          font-size: 28px;
        }
        .header p { 
          color: #666; 
          margin: 10px 0 0 0;
        }
        .summary { 
          background: #f9f9f9; 
          padding: 20px; 
          border-radius: 8px; 
          margin-bottom: 30px;
        }
        .summary h2 { 
          color: #FFD700; 
          margin-top: 0;
          border-bottom: 2px solid #FFD700;
          padding-bottom: 10px;
        }
        .counts { 
          display: flex; 
          justify-content: space-around; 
          margin: 20px 0;
        }
        .count-item { 
          text-align: center; 
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .count-number { 
          font-size: 24px; 
          font-weight: bold; 
          color: #000;
        }
        .count-label { 
          color: #666; 
          font-size: 12px;
        }
        .section { 
          margin-bottom: 30px;
        }
        .section h3 { 
          color: #000; 
          border-left: 4px solid #FFD700; 
          padding-left: 15px;
          margin-bottom: 15px;
        }
        .page-list { 
          margin-left: 20px;
        }
        .page-item { 
          margin: 8px 0; 
          padding: 8px 12px;
          background: #f5f5f5;
          border-radius: 4px;
        }
        .page-item.included { 
          border-left: 4px solid #28a745;
        }
        .page-item.excluded { 
          border-left: 4px solid #dc3545; 
          opacity: 0.7;
          text-decoration: line-through;
        }
        .page-item.custom { 
          border-left: 4px solid #FFD700;
        }
        .page-name { 
          font-weight: bold; 
          color: #000;
        }
        .page-desc { 
          color: #666; 
          font-size: 14px; 
          margin-top: 4px;
        }
        .page-path { 
          color: #999; 
          font-size: 12px; 
          font-family: monospace;
          margin-top: 4px;
        }
        .badge { 
          display: inline-block; 
          padding: 2px 6px; 
          font-size: 10px; 
          background: #FFD700; 
          color: #000; 
          border-radius: 12px; 
          margin-left: 8px;
        }
        .footer { 
          margin-top: 40px; 
          text-align: center; 
          color: #999; 
          font-size: 12px; 
          border-top: 1px solid #ddd; 
          padding-top: 20px;
        }
        @media print {
          .counts { flex-direction: column; }
          .count-item { margin-bottom: 10px; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>ShareACart Sitemap Approval</h1>
        <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
      </div>

      <div class="summary">
        <h2>Summary</h2>
        <div class="counts">
          <div class="count-item">
            <div class="count-number">${summary.totalCounts.customer}</div>
            <div class="count-label">Customer Pages</div>
          </div>
          <div class="count-item">
            <div class="count-number">${summary.totalCounts.vendor}</div>
            <div class="count-label">Vendor Pages</div>
          </div>
          <div class="count-item">
            <div class="count-number">${summary.totalCounts.admin}</div>
            <div class="count-label">Admin Pages</div>
          </div>
          <div class="count-item" style="background: #FFD700;">
            <div class="count-number">${summary.totalCounts.total}</div>
            <div class="count-label"><strong>Total Pages</strong></div>
          </div>
        </div>
        <p><strong>Status:</strong> ${summary.included.length} Included • ${summary.excluded.length} Excluded • ${summary.added.length} Custom Added</p>
      </div>

      ${portals.map(portal => `
        <div class="section">
          <h3>${portal.label}</h3>
          ${portal.sections.map(section => `
            <h4 style="margin-left: 20px; color: #666;">${section.label}</h4>
            <div class="page-list">
              ${section.pages.map(page => `
                <div class="page-item ${page.isSelected ? 'included' : 'excluded'} ${page.isCustom ? 'custom' : ''}">
                  <div class="page-name">
                    ${page.label}
                    ${page.isCustom ? '<span class="badge">Custom</span>' : ''}
                  </div>
                  <div class="page-desc">${page.description}</div>
                  <div class="page-path">${page.path}</div>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      `).join('')}

      <div class="footer">
        <p>This document was generated by the ShareACart Sitemap Approval Tool</p>
        <p>For questions or modifications, please contact the development team</p>
      </div>
    </body>
    </html>
  `;

  // Create a new window for printing
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    };
  }
};
