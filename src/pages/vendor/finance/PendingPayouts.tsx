import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const PendingPayouts: React.FC = () => {
  return (
    <PageTemplate
      title="Pending Payouts"
      description="Check pending payments from the platform. Sellers can monitor upcoming payouts, view payment schedules, track processing status, and manage their payment preferences."
      portalId="vendor"
      sectionId="finance"
      currentPath="/vendor/finance/pending-payouts"
    />
  );
};
