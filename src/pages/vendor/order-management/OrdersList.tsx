import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const OrdersList: React.FC = () => {
  return (
    <PageTemplate
      title="Orders List"
      description="View all orders received for vendor products. Sellers can browse incoming orders, filter by status, view order details, and manage their order fulfillment pipeline."
      portalId="vendor"
      sectionId="order-management"
      currentPath="/vendor/order-management/orders-list"
    />
  );
};
