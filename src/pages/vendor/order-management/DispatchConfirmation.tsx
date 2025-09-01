import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const DispatchConfirmation: React.FC = () => {
  return (
    <PageTemplate
      title="Dispatch Confirmation"
      description="Confirm order dispatch and shipping details. Sellers can mark orders as shipped, provide courier information, upload dispatch receipts, and notify customers of shipment."
      portalId="vendor"
      sectionId="order-management"
      currentPath="/vendor/order-management/dispatch-confirmation"
    />
  );
};
