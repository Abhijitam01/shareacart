import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const DetailReview: React.FC = () => {
  return (
    <PageTemplate
      title="Detail Review"
      description="Detailed review of product specifications and content. Admins can thoroughly examine product details, images, descriptions, pricing, and ensure compliance with platform standards."
      portalId="admin"
      sectionId="product-management"
      currentPath="/admin/product-management/detail-review"
    />
  );
};
