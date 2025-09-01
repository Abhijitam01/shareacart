import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const CourierPartnerPage: React.FC = () => {
  return (
    <PageTemplate
      title="Courier Partner Page"
      description="Manage courier partnerships and agreements. Admins can onboard new courier partners, manage service agreements, monitor partner performance, and handle courier-related operations."
      portalId="admin"
      sectionId="logistics"
      currentPath="/admin/logistics/courier-partner-page"
    />
  );
};
