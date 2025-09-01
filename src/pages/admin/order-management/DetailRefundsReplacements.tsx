import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const DetailRefundsReplacements: React.FC = () => {
  return (
    <PageTemplate
      title="Detail (Refunds/Replacements)"
      description="Manage order refunds and replacement requests. Admins can review refund applications, process replacement orders, handle dispute resolution, and ensure customer satisfaction."
      portalId="admin"
      sectionId="order-management"
      currentPath="/admin/order-management/detail-refunds-replacements"
    />
  );
};
