import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Inventory: React.FC = () => {
  return (
    <PageTemplate
      title="Inventory"
      description="Manage product stock and inventory levels. Sellers can track stock quantities, set low-stock alerts, update inventory counts, and manage product availability across the platform."
      portalId="vendor"
      sectionId="product"
      currentPath="/vendor/product/inventory"
    />
  );
};
