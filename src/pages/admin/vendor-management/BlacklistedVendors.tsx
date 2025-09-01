import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const BlacklistedVendors: React.FC = () => {
  return (
    <PageTemplate
      title="Blacklisted Vendors"
      description="Manage blacklisted and suspended vendors. Admins can view vendors who have been suspended or banned, review suspension reasons, and manage reinstatement processes."
      portalId="admin"
      sectionId="vendor-management"
      currentPath="/admin/vendor-management/blacklisted-vendors"
    />
  );
};
