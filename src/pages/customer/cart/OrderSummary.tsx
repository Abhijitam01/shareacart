import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const OrderSummary: React.FC = () => {
  return (
    <PageTemplate
      title="Order Summary"
      description="Final order confirmation and summary. Customers can review their complete order details, payment information, delivery address, and receive order confirmation with tracking details."
      portalId="customer"
      sectionId="cart"
      currentPath="/customer/cart/order-summary"
    />
  );
};
