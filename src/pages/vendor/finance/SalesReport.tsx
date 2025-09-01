import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SalesReport: React.FC = () => {
  return (
    <PageTemplate
      title="Sales Report"
      description="View detailed sales analytics and reports. Sellers can analyze their sales performance, track revenue trends, view best-selling products, and generate custom reports for different time periods."
      portalId="vendor"
      sectionId="finance"
      currentPath="/vendor/finance/sales-report"
    />
  );
};
