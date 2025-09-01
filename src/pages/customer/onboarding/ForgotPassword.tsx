import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ForgotPassword: React.FC = () => {
  return (
    <PageTemplate
      title="Forgot Password"
      description="Reset password for customer account. This page allows users to recover their account access by requesting a password reset link via email or SMS verification."
      portalId="customer"
      sectionId="onboarding"
      currentPath="/customer/onboarding/forgot-password"
    />
  );
};
