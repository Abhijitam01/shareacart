import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const ReviewsRatings: React.FC = () => {
  return (
    <PageTemplate
      title="Reviews & Ratings"
      description="Rate and review purchased products. Customers can provide feedback on their purchases, rate products and sellers, upload images, and help other customers make informed decisions."
      portalId="customer"
      sectionId="post-order"
      currentPath="/customer/post-order/reviews-ratings"
    />
  );
};
