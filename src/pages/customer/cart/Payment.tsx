import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Payment: React.FC = () => {
  return (
    <PageTemplate
      title="Payment"
      description="Complete payment using available payment methods. Customers can choose from various payment options including credit/debit cards, digital wallets, UPI, and cash on delivery."
      portalId="customer"
      sectionId="cart"
      currentPath="/customer/cart/payment"
    />
  );
};
