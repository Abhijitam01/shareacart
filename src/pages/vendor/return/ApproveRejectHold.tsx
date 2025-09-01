import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ApproveRejectHold: React.FC = () => {
  return (
    <PageTemplate
      title="Approve/Reject/Hold"
      description="Process return requests with approval actions. Sellers can approve valid returns, reject inappropriate requests, or hold cases for further investigation with detailed reasoning."
      portalId="vendor"
      sectionId="return"
      currentPath="/vendor/return/approve-reject-hold"
    />
  );
};
