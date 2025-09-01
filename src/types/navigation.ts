export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  description: string;
}

export interface NavigationSection {
  id: string;
  label: string;
  items: NavigationItem[];
}

export interface Portal {
  id: string;
  label: string;
  sections: NavigationSection[];
}

export const NAVIGATION_DATA: Portal[] = [
  {
    id: 'customer',
    label: 'Customer Portal',
    sections: [
      {
        id: 'onboarding',
        label: 'Onboarding & Profile',
        items: [
          { id: 'signup', label: 'Sign-up', path: '/customer/onboarding/signup', description: 'Create a new customer account with email and basic information' },
          { id: 'signin', label: 'Sign-in', path: '/customer/onboarding/signin', description: 'Login to existing customer account' },
          { id: 'forgot-password', label: 'Forgot Password', path: '/customer/onboarding/forgot-password', description: 'Reset password for customer account' },
          { id: 'profile-setup', label: 'Profile Setup', path: '/customer/onboarding/profile-setup', description: 'Complete customer profile with personal details' },
          { id: 'kyc-upload', label: 'KYC Upload', path: '/customer/onboarding/kyc-upload', description: 'Upload identity verification documents' },
          { id: 'my-account', label: 'My Account', path: '/customer/onboarding/my-account', description: 'View and manage customer account settings' }
        ]
      },
      {
        id: 'browsing',
        label: 'Product Browsing',
        items: [
          { id: 'homepage', label: 'Homepage', path: '/customer/browsing/homepage', description: 'Main landing page with featured products and categories' },
          { id: 'category-listing', label: 'Category Listing', path: '/customer/browsing/category-listing', description: 'Browse products by main categories' },
          { id: 'sub-category', label: 'Sub-category', path: '/customer/browsing/sub-category', description: 'Browse products within specific sub-categories' },
          { id: 'search-result', label: 'Search Result', path: '/customer/browsing/search-result', description: 'Display search results for customer queries' },
          { id: 'product-detail', label: 'Product Detail', path: '/customer/browsing/product-detail', description: 'Detailed view of individual product with specifications' },
          { id: 'seller-profile', label: 'Seller Profile', path: '/customer/browsing/seller-profile', description: 'View seller information and their products' }
        ]
      },
      {
        id: 'cart',
        label: 'Cart & Checkout',
        items: [
          { id: 'cart-page', label: 'Cart Page', path: '/customer/cart/cart-page', description: 'View and manage items in shopping cart' },
          { id: 'shipping-address', label: 'Shipping Address', path: '/customer/cart/shipping-address', description: 'Add and select shipping address for delivery' },
          { id: 'delivery-options', label: 'Delivery Options', path: '/customer/cart/delivery-options', description: 'Choose delivery method and timeline' },
          { id: 'payment', label: 'Payment', path: '/customer/cart/payment', description: 'Complete payment using available payment methods' },
          { id: 'order-summary', label: 'Order Summary', path: '/customer/cart/order-summary', description: 'Final order confirmation and summary' }
        ]
      },
      {
        id: 'post-order',
        label: 'Post-Order',
        items: [
          { id: 'order-list', label: 'Order List', path: '/customer/post-order/order-list', description: 'View all customer orders and their status' },
          { id: 'order-tracking', label: 'Order Tracking', path: '/customer/post-order/order-tracking', description: 'Track order delivery progress in real-time' },
          { id: 'return-replacement', label: 'Return & Replacement', path: '/customer/post-order/return-replacement', description: 'Request returns or replacements for orders' },
          { id: 'refund-status', label: 'Refund Status', path: '/customer/post-order/refund-status', description: 'Check status of refund requests' },
          { id: 'reviews-ratings', label: 'Reviews & Ratings', path: '/customer/post-order/reviews-ratings', description: 'Rate and review purchased products' }
        ]
      }
    ]
  },
  {
    id: 'vendor',
    label: 'Vendor Portal',
    sections: [
      {
        id: 'onboarding',
        label: 'Onboarding',
        items: [
          { id: 'seller-signup', label: 'Seller Sign-up', path: '/vendor/onboarding/seller-signup', description: 'Register as a new seller on the platform' },
          { id: 'kyc', label: 'KYC', path: '/vendor/onboarding/kyc', description: 'Complete vendor identity verification process' },
          { id: 'agreement', label: 'Agreement', path: '/vendor/onboarding/agreement', description: 'Review and accept vendor terms and conditions' },
          { id: 'status-page', label: 'Status Page', path: '/vendor/onboarding/status-page', description: 'Check vendor onboarding and approval status' }
        ]
      },
      {
        id: 'product',
        label: 'Product',
        items: [
          { id: 'add-new', label: 'Add New', path: '/vendor/product/add-new', description: 'Add new products to vendor catalog' },
          { id: 'bulk-upload', label: 'Bulk Upload', path: '/vendor/product/bulk-upload', description: 'Upload multiple products using CSV/Excel files' },
          { id: 'my-products', label: 'My Products', path: '/vendor/product/my-products', description: 'View and manage all vendor products' },
          { id: 'edit-product', label: 'Edit Product', path: '/vendor/product/edit-product', description: 'Edit existing product details and specifications' },
          { id: 'set-offers', label: 'Set Offers', path: '/vendor/product/set-offers', description: 'Create and manage product discounts and offers' },
          { id: 'inventory', label: 'Inventory', path: '/vendor/product/inventory', description: 'Manage product stock and inventory levels' }
        ]
      },
      {
        id: 'order-management',
        label: 'Order Management',
        items: [
          { id: 'orders-list', label: 'Orders List', path: '/vendor/order-management/orders-list', description: 'View all orders received for vendor products' },
          { id: 'order-detail', label: 'Order Detail', path: '/vendor/order-management/order-detail', description: 'Detailed view of individual customer orders' },
          { id: 'tracking-update', label: 'Tracking Update', path: '/vendor/order-management/tracking-update', description: 'Update order tracking and shipping information' },
          { id: 'dispatch-confirmation', label: 'Dispatch Confirmation', path: '/vendor/order-management/dispatch-confirmation', description: 'Confirm order dispatch and shipping details' }
        ]
      },
      {
        id: 'finance',
        label: 'Finance',
        items: [
          { id: 'sales-report', label: 'Sales Report', path: '/vendor/finance/sales-report', description: 'View detailed sales analytics and reports' },
          { id: 'settlement-statement', label: 'Settlement Statement', path: '/vendor/finance/settlement-statement', description: 'Review payment settlements and transactions' },
          { id: 'pending-payouts', label: 'Pending Payouts', path: '/vendor/finance/pending-payouts', description: 'Check pending payments from the platform' },
          { id: 'commission-deduction', label: 'Commission & Deduction Page', path: '/vendor/finance/commission-deduction', description: 'View platform commission and fee deductions' }
        ]
      },
      {
        id: 'return',
        label: 'Return',
        items: [
          { id: 'return-request-list', label: 'Return Request List', path: '/vendor/return/return-request-list', description: 'View all customer return requests' },
          { id: 'return-refund-detail', label: 'Return/Refund Detail', path: '/vendor/return/return-refund-detail', description: 'Detailed view of return and refund requests' },
          { id: 'approve-reject-hold', label: 'Approve/Reject/Hold', path: '/vendor/return/approve-reject-hold', description: 'Process return requests with approval actions' }
        ]
      }
    ]
  },
  {
    id: 'admin',
    label: 'Admin Portal',
    sections: [
      {
        id: 'vendor-management',
        label: 'Vendor Management',
        items: [
          { id: 'approval-list', label: 'Approval List', path: '/admin/vendor-management/approval-list', description: 'Review and approve new vendor registrations' },
          { id: 'detail-page', label: 'Detail Page', path: '/admin/vendor-management/detail-page', description: 'View detailed vendor information and history' },
          { id: 'blacklisted-vendors', label: 'Blacklisted Vendors', path: '/admin/vendor-management/blacklisted-vendors', description: 'Manage blacklisted and suspended vendors' },
          { id: 'performance', label: 'Performance', path: '/admin/vendor-management/performance', description: 'Monitor vendor performance metrics and ratings' }
        ]
      },
      {
        id: 'product-management',
        label: 'Product Management',
        items: [
          { id: 'approvals', label: 'Approvals', path: '/admin/product-management/approvals', description: 'Review and approve new product listings' },
          { id: 'detail-review', label: 'Detail Review', path: '/admin/product-management/detail-review', description: 'Detailed review of product specifications and content' },
          { id: 'categories', label: 'Categories', path: '/admin/product-management/categories', description: 'Manage product categories and subcategories' },
          { id: 'feature-recommendation', label: 'Feature Recommendation', path: '/admin/product-management/feature-recommendation', description: 'Manage featured products and recommendations' }
        ]
      },
      {
        id: 'order-management',
        label: 'Order Management',
        items: [
          { id: 'master-list', label: 'Master List', path: '/admin/order-management/master-list', description: 'View all orders across the platform' },
          { id: 'detail-refunds-replacements', label: 'Detail (Refunds/Replacements)', path: '/admin/order-management/detail-refunds-replacements', description: 'Manage order refunds and replacement requests' },
          { id: 'escalation-cases', label: 'Escalation Cases', path: '/admin/order-management/escalation-cases', description: 'Handle escalated order issues and disputes' },
          { id: 'refund-override', label: 'Refund Override', path: '/admin/order-management/refund-override', description: 'Override refund decisions and policies' }
        ]
      },
      {
        id: 'marketing',
        label: 'Marketing',
        items: [
          { id: 'email', label: 'Email', path: '/admin/marketing/email', description: 'Manage email marketing campaigns and templates' },
          { id: 'coupon', label: 'Coupon', path: '/admin/marketing/coupon', description: 'Create and manage discount coupons and promotions' }
        ]
      },
      {
        id: 'logistics',
        label: 'Logistics',
        items: [
          { id: 'order-to-courier', label: 'Order to Courier', path: '/admin/logistics/order-to-courier', description: 'Assign orders to courier partners for delivery' },
          { id: 'delivery-dashboard', label: 'Delivery Dashboard', path: '/admin/logistics/delivery-dashboard', description: 'Monitor delivery performance and statistics' },
          { id: 'courier-partner-page', label: 'Courier Partner Page', path: '/admin/logistics/courier-partner-page', description: 'Manage courier partnerships and agreements' }
        ]
      },
      {
        id: 'finance',
        label: 'Finance',
        items: [
          { id: 'commission', label: 'Commission', path: '/admin/finance/commission', description: 'Manage platform commission rates and structures' },
          { id: 'vendor-report', label: 'Vendor Report', path: '/admin/finance/vendor-report', description: 'Generate financial reports for vendor payments' },
          { id: 'dispute-resolution', label: 'Dispute Resolution', path: '/admin/finance/dispute-resolution', description: 'Handle financial disputes between parties' },
          { id: 'transaction-report', label: 'Transaction Report', path: '/admin/finance/transaction-report', description: 'View detailed transaction reports and analytics' }
        ]
      },
      {
        id: 'analytics',
        label: 'Analytics',
        items: [
          { id: 'sales', label: 'Sales', path: '/admin/analytics/sales', description: 'Analyze sales performance and trends across platform' },
          { id: 'vendor', label: 'Vendor', path: '/admin/analytics/vendor', description: 'Analytics on vendor performance and behavior' },
          { id: 'customer', label: 'Customer', path: '/admin/analytics/customer', description: 'Customer behavior analytics and insights' }
        ]
      }
    ]
  }
];
