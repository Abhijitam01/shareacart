import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const DeliveryOptions: React.FC = () => {
  return (
    <PageTemplate
      title="Delivery Options"
      description="Choose delivery method and timeline. Customers can select from various delivery options including standard, express, and same-day delivery with associated costs and time estimates."
      portalId="customer"
      sectionId="cart"
      currentPath="/customer/cart/delivery-options"
    />
  );
};
