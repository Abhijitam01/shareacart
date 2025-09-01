import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ProductDetail: React.FC = () => {
  return (
    <PageTemplate
      title="Product Detail"
      description="Detailed view of individual product with specifications. Customers can view comprehensive product information, images, reviews, pricing, and add items to cart or wishlist."
      portalId="customer"
      sectionId="browsing"
      currentPath="/customer/browsing/product-detail"
    />
  );
};
