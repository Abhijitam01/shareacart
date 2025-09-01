import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Sales: React.FC = () => {
  return (
    <PageTemplate
      title="Sales"
      description="Analyze sales performance and trends across platform. Admins can view comprehensive sales analytics, track revenue growth, identify best-performing categories, and monitor platform-wide sales metrics."
      portalId="admin"
      sectionId="analytics"
      currentPath="/admin/analytics/sales"
    />
  );
};
