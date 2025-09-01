import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Homepage: React.FC = () => {
  return (
    <PageTemplate
      title="Homepage"
      description="Main landing page with featured products and categories. Customers can discover trending products, browse categories, and access personalized recommendations based on their shopping history."
      portalId="customer"
      sectionId="browsing"
      currentPath="/customer/browsing/homepage"
    />
  );
};
