import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const OrderTracking: React.FC = () => {
  return (
    <PageTemplate
      title="Order Tracking"
      description="Track order delivery progress in real-time. Customers can view detailed tracking information, delivery timeline, current location of their package, and estimated delivery time."
      portalId="customer"
      sectionId="post-order"
      currentPath="/customer/post-order/order-tracking"
    />
  );
};
