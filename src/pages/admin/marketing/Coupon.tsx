import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const Coupon: React.FC = () => {
  return (
    <PageTemplate
      title="Coupon"
      description="Create and manage discount coupons and promotions. Admins can design coupon campaigns, set discount rules, define usage limits, track redemption rates, and manage promotional offers."
      portalId="admin"
      sectionId="marketing"
      currentPath="/admin/marketing/coupon"
    />
  );
};
