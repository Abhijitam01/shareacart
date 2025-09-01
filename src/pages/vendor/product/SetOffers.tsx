import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SetOffers: React.FC = () => {
  return (
    <PageTemplate
      title="Set Offers"
      description="Create and manage product discounts and offers. Sellers can set up promotional pricing, seasonal discounts, bulk purchase offers, and limited-time deals to boost sales."
      portalId="vendor"
      sectionId="product"
      currentPath="/vendor/product/set-offers"
    />
  );
};
