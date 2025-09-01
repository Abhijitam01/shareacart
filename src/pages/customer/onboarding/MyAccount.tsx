import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const MyAccount: React.FC = () => {
  return (
    <PageTemplate
      title="My Account"
      description="View and manage customer account settings. Users can update their profile information, change passwords, manage addresses, and configure account preferences."
      portalId="customer"
      sectionId="onboarding"
      currentPath="/customer/onboarding/my-account"
    />
  );
};
