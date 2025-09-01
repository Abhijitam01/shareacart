import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const EscalationCases: React.FC = () => {
  return (
    <PageTemplate
      title="Escalation Cases"
      description="Handle escalated order issues and disputes. Admins can manage complex customer complaints, vendor disputes, delivery issues, and other escalated cases requiring administrative intervention."
      portalId="admin"
      sectionId="order-management"
      currentPath="/admin/order-management/escalation-cases"
    />
  );
};
