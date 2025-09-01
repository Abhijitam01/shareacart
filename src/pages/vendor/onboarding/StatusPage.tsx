import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const StatusPage: React.FC = () => {
  return (
    <PageTemplate
      title="Status Page"
      description="Check vendor onboarding and approval status. Sellers can monitor their application progress, view pending requirements, and receive updates on their account activation status."
      portalId="vendor"
      sectionId="onboarding"
      currentPath="/vendor/onboarding/status-page"
    />
  );
};
