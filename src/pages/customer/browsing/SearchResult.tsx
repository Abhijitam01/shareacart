import React from 'react';
import { PageTemplate } from '../../../components/PageTemplate';

export const SearchResult: React.FC = () => {
  return (
    <PageTemplate
      title="Search Result"
      description="Display search results for customer queries. Users can view products matching their search terms with relevance-based sorting and filtering options to refine results."
      portalId="customer"
      sectionId="browsing"
      currentPath="/customer/browsing/search-result"
    />
  );
};
