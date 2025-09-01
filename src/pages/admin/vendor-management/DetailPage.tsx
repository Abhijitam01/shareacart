import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const DetailPage: React.FC = () => {
  return (
    <PageTemplate
      title="Detail Page"
      description="View detailed vendor information and history. Admins can access comprehensive vendor profiles, transaction history, performance metrics, and compliance records for informed decision-making."
      portalId="admin"
      sectionId="vendor-management"
      currentPath="/admin/vendor-management/detail-page"
    />
  );
};
