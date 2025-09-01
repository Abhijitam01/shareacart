import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const CommissionDeduction: React.FC = () => {
  return (
    <PageTemplate
      title="Commission & Deduction Page"
      description="View platform commission and fee deductions. Sellers can understand commission structures, view detailed breakdowns of fees, and track deductions from their sales revenue."
      portalId="vendor"
      sectionId="finance"
      currentPath="/vendor/finance/commission-deduction"
    />
  );
};
