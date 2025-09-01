import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const CartPage: React.FC = () => {
  return (
    <PageTemplate
      title="Cart Page"
      description="View and manage items in shopping cart. Customers can review selected products, modify quantities, remove items, apply coupons, and proceed to checkout."
      portalId="customer"
      sectionId="cart"
      currentPath="/customer/cart/cart-page"
    />
  );
};
