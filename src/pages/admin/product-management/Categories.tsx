import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Categories: React.FC = () => {
  return (
    <PageTemplate
      title="Categories"
      description="Manage product categories and subcategories. Admins can create, edit, and organize product categories, define category hierarchies, and manage category-specific attributes and filters."
      portalId="admin"
      sectionId="product-management"
      currentPath="/admin/product-management/categories"
    />
  );
};
