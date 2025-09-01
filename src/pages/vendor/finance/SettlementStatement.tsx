import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SettlementStatement: React.FC = () => {
  return (
    <PageTemplate
      title="Settlement Statement"
      description="Review payment settlements and transactions. Sellers can view detailed settlement statements, payment cycles, transaction history, and reconcile their earnings with the platform."
      portalId="vendor"
      sectionId="finance"
      currentPath="/vendor/finance/settlement-statement"
    />
  );
};
