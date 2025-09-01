import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SellerProfile: React.FC = () => {
  return (
    <PageTemplate
      title="Seller Profile"
      description="View seller information and their products. Customers can explore a vendor's store, view their product catalog, ratings, reviews, and seller policies before making purchases."
      portalId="customer"
      sectionId="browsing"
      currentPath="/customer/browsing/seller-profile"
    />
  );
};
