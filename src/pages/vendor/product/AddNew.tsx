import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const AddNew: React.FC = () => {
  return (
    <PageTemplate
      title="Add New"
      description="Add new products to vendor catalog. Sellers can create product listings with detailed descriptions, images, pricing, specifications, and inventory information."
      portalId="vendor"
      sectionId="product"
      currentPath="/vendor/product/add-new"
    />
  );
};
