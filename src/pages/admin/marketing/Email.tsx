import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Email: React.FC = () => {
  return (
    <PageTemplate
      title="Email"
      description="Manage email marketing campaigns and templates. Admins can create email campaigns, design templates, segment customer lists, schedule newsletters, and track email marketing performance."
      portalId="admin"
      sectionId="marketing"
      currentPath="/admin/marketing/email"
    />
  );
};
