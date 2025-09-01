import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const DisputeResolution: React.FC = () => {
  return (
    <PageTemplate
      title="Dispute Resolution"
      description="Handle financial disputes between parties. Admins can mediate payment disputes, resolve vendor-customer conflicts, manage chargebacks, and ensure fair resolution of financial disagreements."
      portalId="admin"
      sectionId="finance"
      currentPath="/admin/finance/dispute-resolution"
    />
  );
};
