import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const TransactionReport: React.FC = () => {
  return (
    <PageTemplate
      title="Transaction Report"
      description="View detailed transaction reports and analytics. Admins can analyze platform transaction data, monitor payment flows, track revenue metrics, and generate financial insights."
      portalId="admin"
      sectionId="finance"
      currentPath="/admin/finance/transaction-report"
    />
  );
};
