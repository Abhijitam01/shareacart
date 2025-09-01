import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const DeliveryDashboard: React.FC = () => {
  return (
    <PageTemplate
      title="Delivery Dashboard"
      description="Monitor delivery performance and statistics. Admins can track delivery metrics, monitor courier performance, view delivery success rates, and identify logistics bottlenecks."
      portalId="admin"
      sectionId="logistics"
      currentPath="/admin/logistics/delivery-dashboard"
    />
  );
};
