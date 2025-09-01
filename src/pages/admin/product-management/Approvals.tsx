import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Approvals: React.FC = () => {
  return (
    <PageTemplate
      title="Approvals"
      description="Review and approve new product listings. Admins can evaluate product submissions, verify compliance with platform policies, check content quality, and approve or reject product listings."
      portalId="admin"
      sectionId="product-management"
      currentPath="/admin/product-management/approvals"
    />
  );
};
