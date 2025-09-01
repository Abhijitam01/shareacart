import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const OrderList: React.FC = () => {
  return (
    <PageTemplate
      title="Order List"
      description="View all customer orders and their status. Customers can browse their order history, track current orders, and access detailed information about past and present purchases."
      portalId="customer"
      sectionId="post-order"
      currentPath="/customer/post-order/order-list"
    />
  );
};
