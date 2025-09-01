import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Vendor: React.FC = () => {
  return (
    <PageTemplate
      title="Vendor"
      description="Analytics on vendor performance and behavior. Admins can analyze vendor metrics, track seller engagement, monitor vendor growth patterns, and identify opportunities for vendor support."
      portalId="admin"
      sectionId="analytics"
      currentPath="/admin/analytics/vendor"
    />
  );
};
