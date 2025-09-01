import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const TrackingUpdate: React.FC = () => {
  return (
    <PageTemplate
      title="Tracking Update"
      description="Update order tracking and shipping information. Sellers can provide shipment tracking numbers, update delivery status, and communicate progress to customers through the platform."
      portalId="vendor"
      sectionId="order-management"
      currentPath="/vendor/order-management/tracking-update"
    />
  );
};
