import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SellerSignup: React.FC = () => {
  return (
    <PageTemplate
      title="Seller Sign-up"
      description="Register as a new seller on the platform. Vendors can create their seller account by providing business information, contact details, and initial documentation to start selling."
      portalId="vendor"
      sectionId="onboarding"
      currentPath="/vendor/onboarding/seller-signup"
    />
  );
};
