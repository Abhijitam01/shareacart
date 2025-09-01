import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SubCategory: React.FC = () => {
  return (
    <PageTemplate
      title="Sub-category"
      description="Browse products within specific sub-categories. Customers can drill down into more specific product types with advanced filtering options and detailed product comparisons."
      portalId="customer"
      sectionId="browsing"
      currentPath="/customer/browsing/sub-category"
    />
  );
};
