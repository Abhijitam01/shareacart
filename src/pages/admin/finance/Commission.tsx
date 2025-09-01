import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Commission: React.FC = () => {
  return (
    <PageTemplate
      title="Commission"
      description="Manage platform commission rates and structures. Admins can configure commission rates for different categories, adjust vendor fees, and manage revenue-sharing models across the platform."
      portalId="admin"
      sectionId="finance"
      currentPath="/admin/finance/commission"
    />
  );
};
