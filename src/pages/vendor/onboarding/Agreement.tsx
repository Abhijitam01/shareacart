import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Agreement: React.FC = () => {
  return (
    <PageTemplate
      title="Agreement"
      description="Review and accept vendor terms and conditions. Sellers can read through platform policies, commission structures, and legal agreements before accepting to become active vendors."
      portalId="vendor"
      sectionId="onboarding"
      currentPath="/vendor/onboarding/agreement"
    />
  );
};
