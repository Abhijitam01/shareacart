import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const EditProduct: React.FC = () => {
  return (
    <PageTemplate
      title="Edit Product"
      description="Edit existing product details and specifications. Sellers can update product information, modify pricing, change descriptions, add new images, and adjust inventory levels."
      portalId="vendor"
      sectionId="product"
      currentPath="/vendor/product/edit-product"
    />
  );
};
