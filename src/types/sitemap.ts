export interface SitemapPage {
  id: string;
  label: string;
  description: string;
  path: string;
  isSelected: boolean;
  isCustom?: boolean;
}

export interface SitemapSection {
  id: string;
  label: string;
  pages: SitemapPage[];
  isExpanded: boolean;
}

export interface SitemapPortal {
  id: string;
  label: string;
  sections: SitemapSection[];
  isExpanded: boolean;
}

export interface SitemapSummary {
  included: SitemapPage[];
  excluded: SitemapPage[];
  added: SitemapPage[];
  totalCounts: {
    customer: number;
    vendor: number;
    admin: number;
    total: number;
  };
}

export interface NewPageForm {
  name: string;
  description: string;
  portal: 'customer' | 'vendor' | 'admin';
}
