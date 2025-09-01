import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ProfileSetup: React.FC = () => {
  return (
    <PageTemplate
      title="Profile Setup"
      description="Complete customer profile with personal details. New users can add their personal information, preferences, and shipping addresses to personalize their shopping experience."
      portalId="customer"
      sectionId="onboarding"
      currentPath="/customer/onboarding/profile-setup"
    />
  );
};
