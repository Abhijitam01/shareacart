import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ShippingAddress: React.FC = () => {
  return (
    <PageTemplate
      title="Shipping Address"
      description="Add and select shipping address for delivery. Customers can manage multiple delivery addresses, add new addresses, and select the preferred delivery location for their order."
      portalId="customer"
      sectionId="cart"
      currentPath="/customer/cart/shipping-address"
    />
  );
};
