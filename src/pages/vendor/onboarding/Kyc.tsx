import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Kyc: React.FC = () => {
  return (
    <PageTemplate
      title="KYC"
      description="Complete vendor identity verification process. Sellers must upload business registration documents, tax information, and identity proofs to comply with platform requirements."
      portalId="vendor"
      sectionId="onboarding"
      currentPath="/vendor/onboarding/kyc"
    />
  );
};
