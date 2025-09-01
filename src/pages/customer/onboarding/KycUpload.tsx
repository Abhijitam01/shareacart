import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const KycUpload: React.FC = () => {
  return (
    <PageTemplate
      title="KYC Upload"
      description="Upload identity verification documents. Customers can submit required identification documents for account verification and to enable higher transaction limits."
      portalId="customer"
      sectionId="onboarding"
      currentPath="/customer/onboarding/kyc-upload"
    />
  );
};
