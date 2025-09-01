import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ReturnRequestList: React.FC = () => {
  return (
    <PageTemplate
      title="Return Request List"
      description="View all customer return requests. Sellers can browse return requests for their products, filter by status, and manage the return approval process efficiently."
      portalId="vendor"
      sectionId="return"
      currentPath="/vendor/return/return-request-list"
    />
  );
};
