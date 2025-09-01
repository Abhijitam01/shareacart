import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const RefundStatus: React.FC = () => {
  return (
    <PageTemplate
      title="Refund Status"
      description="Check status of refund requests. Customers can monitor the progress of their refund applications, view processing timelines, and receive updates on refund disbursements."
      portalId="customer"
      sectionId="post-order"
      currentPath="/customer/post-order/refund-status"
    />
  );
};
