import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const MyProducts: React.FC = () => {
  return (
    <PageTemplate
      title="My Products"
      description="View and manage all vendor products. Sellers can browse their product catalog, check approval status, edit listings, manage inventory, and track product performance."
      portalId="vendor"
      sectionId="product"
      currentPath="/vendor/product/my-products"
    />
  );
};
