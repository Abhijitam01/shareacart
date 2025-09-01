import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SignUp: React.FC = () => {
  return (
    <PageTemplate
      title="Sign-up"
      description="Create a new customer account with email and basic information. This page allows new users to register on the platform by providing their email, password, and phone number."
      portalId="customer"
      sectionId="onboarding"
      currentPath="/customer/onboarding/signup"
    />
  );
};
