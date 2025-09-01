# ShareACart Wireframe

A complete prototype web application showcasing the entire website structure with Customer Portal, Vendor Portal, and Admin Portal.

## Features

- **Complete Navigation**: 66 sub-pages across 16 main sections
- **Three Portals**: Customer, Vendor, and Admin with distinct workflows
- **Modern UI**: Dark theme with yellow accents using Tailwind CSS
- **Responsive Layout**: Collapsible sidebar and fixed header
- **TypeScript**: Fully typed React components
- **React Router**: Complete routing structure

## Tech Stack

- React 18 + Vite
- TypeScript (strict mode)
- React Router DOM v6
- Tailwind CSS
- Modern component architecture

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Breadcrumb.tsx
│   ├── Header.tsx
│   ├── PageTemplate.tsx
│   └── Sidebar.tsx
├── layouts/             # Layout components
│   └── Layout.tsx
├── pages/               # All page components
│   ├── customer/        # Customer portal pages (17 pages)
│   ├── vendor/          # Vendor portal pages (20 pages)
│   ├── admin/           # Admin portal pages (29 pages)
│   └── LandingPage.tsx
├── types/               # TypeScript type definitions
│   └── navigation.ts
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Portal Overview

### Customer Portal (17 pages)
- **Onboarding & Profile**: Sign-up, Sign-in, Profile management, KYC
- **Product Browsing**: Homepage, Categories, Search, Product details
- **Cart & Checkout**: Cart, Shipping, Payment, Order summary
- **Post-Order**: Order tracking, Returns, Reviews

### Vendor Portal (20 pages)
- **Onboarding**: Seller registration, KYC, Agreement
- **Product Management**: Add products, Inventory, Offers
- **Order Management**: Order processing, Tracking, Dispatch
- **Finance**: Sales reports, Settlements, Payouts
- **Returns**: Return request management

### Admin Portal (29 pages)
- **Vendor Management**: Approvals, Performance monitoring
- **Product Management**: Product approvals, Categories
- **Order Management**: Master list, Refunds, Escalations
- **Marketing**: Email campaigns, Coupons
- **Logistics**: Courier management, Delivery tracking
- **Finance**: Commission management, Reports
- **Analytics**: Sales, Vendor, Customer analytics

## Theme

- **Primary Color**: Yellow (#FFD700) - Used for highlights and active states
- **Background**: Black (#000000) - Main background
- **Secondary Background**: Dark Grey (#2E2E2E) - Cards and sidebar
- **Text**: White/Light Grey for optimal readability

## Navigation

- **Sidebar**: Collapsible navigation with grouped sections
- **Header**: Shows current page breadcrumb and toggle button
- **Breadcrumbs**: Portal → Section → Page hierarchy
- **Active States**: Yellow highlighting for current page

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create component in appropriate portal directory
2. Add route to `App.tsx`
3. Update navigation data in `types/navigation.ts`

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

This is a prototype/wireframe project for demonstration purposes.
