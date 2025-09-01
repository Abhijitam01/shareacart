import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const VendorReport: React.FC = () => {
  return (
    <PageTemplate
      title="Vendor Report"
      description="Generate financial reports for vendor payments. Admins can create comprehensive financial reports, track vendor earnings, monitor payment schedules, and generate settlement documents."
      portalId="admin"
      sectionId="finance"
      currentPath="/admin/finance/vendor-report"
    />
  );
};
