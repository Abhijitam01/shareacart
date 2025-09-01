import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Customer: React.FC = () => {
  return (
    <PageTemplate
      title="Customer"
      description="Customer behavior analytics and insights. Admins can analyze customer engagement, track user acquisition, monitor shopping patterns, and gain insights into customer preferences and behavior."
      portalId="admin"
      sectionId="analytics"
      currentPath="/admin/analytics/customer"
    />
  );
};
