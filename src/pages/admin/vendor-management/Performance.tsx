import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Performance: React.FC = () => {
  return (
    <PageTemplate
      title="Performance"
      description="Monitor vendor performance metrics and ratings. Admins can track vendor KPIs, customer satisfaction scores, delivery performance, and identify top-performing and underperforming vendors."
      portalId="admin"
      sectionId="vendor-management"
      currentPath="/admin/vendor-management/performance"
    />
  );
};
