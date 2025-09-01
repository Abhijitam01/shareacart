import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ApprovalList: React.FC = () => {
  return (
    <PageTemplate
      title="Approval List"
      description="Review and approve new vendor registrations. Admins can evaluate vendor applications, verify documentation, assess business credentials, and approve or reject new seller registrations."
      portalId="admin"
      sectionId="vendor-management"
      currentPath="/admin/vendor-management/approval-list"
    />
  );
};
