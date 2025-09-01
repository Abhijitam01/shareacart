import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const MasterList: React.FC = () => {
  return (
    <PageTemplate
      title="Master List"
      description="View all orders across the platform. Admins can monitor all customer orders, track order statuses, identify issues, and oversee the entire order fulfillment process."
      portalId="admin"
      sectionId="order-management"
      currentPath="/admin/order-management/master-list"
    />
  );
};
