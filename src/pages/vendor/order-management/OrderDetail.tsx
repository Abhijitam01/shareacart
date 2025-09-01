import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const OrderDetail: React.FC = () => {
  return (
    <PageTemplate
      title="Order Detail"
      description="Detailed view of individual customer orders. Sellers can view complete order information, customer details, product specifications, delivery address, and payment status."
      portalId="vendor"
      sectionId="order-management"
      currentPath="/vendor/order-management/order-detail"
    />
  );
};
