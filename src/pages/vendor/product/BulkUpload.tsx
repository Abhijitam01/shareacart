import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const BulkUpload: React.FC = () => {
  return (
    <PageTemplate
      title="Bulk Upload"
      description="Upload multiple products using CSV/Excel files. Sellers can efficiently add large inventories by uploading spreadsheet files with product data and images in bulk."
      portalId="vendor"
      sectionId="product"
      currentPath="/vendor/product/bulk-upload"
    />
  );
};
