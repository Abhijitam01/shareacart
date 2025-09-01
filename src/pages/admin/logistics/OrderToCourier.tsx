import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const OrderToCourier: React.FC = () => {
  return (
    <PageTemplate
      title="Order to Courier"
      description="Assign orders to courier partners for delivery. Admins can allocate orders to different courier services, optimize delivery routes, and manage courier assignments based on location and capacity."
      portalId="admin"
      sectionId="logistics"
      currentPath="/admin/logistics/order-to-courier"
    />
  );
};
