import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const CategoryListing: React.FC = () => {
  return (
    <PageTemplate
      title="Category Listing"
      description="Browse products by main categories. Customers can explore different product categories with filtering and sorting options to find products that match their needs."
      portalId="customer"
      sectionId="browsing"
      currentPath="/customer/browsing/category-listing"
    />
  );
};
