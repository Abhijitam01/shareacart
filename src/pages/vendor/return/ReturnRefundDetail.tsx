import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ReturnRefundDetail: React.FC = () => {
  return (
    <PageTemplate
      title="Return/Refund Detail"
      description="Detailed view of return and refund requests. Sellers can review customer return reasons, view uploaded images, assess product condition, and make informed decisions on returns."
      portalId="vendor"
      sectionId="return"
      currentPath="/vendor/return/return-refund-detail"
    />
  );
};
