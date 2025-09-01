import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ReturnReplacement: React.FC = () => {
  return (
    <PageTemplate
      title="Return & Replacement"
      description="Request returns or replacements for orders. Customers can initiate return requests, upload images of damaged items, select return reasons, and track the status of their return requests."
      portalId="customer"
      sectionId="post-order"
      currentPath="/customer/post-order/return-replacement"
    />
  );
};
