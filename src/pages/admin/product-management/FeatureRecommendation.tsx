import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const FeatureRecommendation: React.FC = () => {
  return (
    <PageTemplate
      title="Feature Recommendation"
      description="Manage featured products and recommendations. Admins can select products for homepage features, create promotional banners, manage trending products, and configure recommendation algorithms."
      portalId="admin"
      sectionId="product-management"
      currentPath="/admin/product-management/feature-recommendation"
    />
  );
};
