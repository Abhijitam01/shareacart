import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SignIn: React.FC = () => {
  return (
    <PageTemplate
      title="Sign-in"
      description="Login to existing customer account. Users can authenticate using either their email or phone number along with their password to access their account dashboard."
      portalId="customer"
      sectionId="onboarding"
      currentPath="/customer/onboarding/signin"
    />
  );
};
