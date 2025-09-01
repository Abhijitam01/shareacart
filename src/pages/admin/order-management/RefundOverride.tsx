import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const RefundOverride: React.FC = () => {
  return (
    <PageTemplate
      title="Refund Override"
      description="Override refund decisions and policies. Admins can make exceptional refund decisions, bypass standard refund policies for special cases, and handle complex refund scenarios."
      portalId="admin"
      sectionId="order-management"
      currentPath="/admin/order-management/refund-override"
    />
  );
};
