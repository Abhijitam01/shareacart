import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';

// Customer Pages
import { SignUp } from './pages/customer/onboarding/SignUp';
import { SignIn } from './pages/customer/onboarding/SignIn';
import { ForgotPassword } from './pages/customer/onboarding/ForgotPassword';
import { ProfileSetup } from './pages/customer/onboarding/ProfileSetup';
import { KycUpload } from './pages/customer/onboarding/KycUpload';
import { MyAccount } from './pages/customer/onboarding/MyAccount';
import { Homepage } from './pages/customer/browsing/Homepage';
import { CategoryListing } from './pages/customer/browsing/CategoryListing';
import { SubCategory } from './pages/customer/browsing/SubCategory';
import { SearchResult } from './pages/customer/browsing/SearchResult';
import { ProductDetail } from './pages/customer/browsing/ProductDetail';
import { SellerProfile } from './pages/customer/browsing/SellerProfile';
import { CartPage } from './pages/customer/cart/CartPage';
import { ShippingAddress } from './pages/customer/cart/ShippingAddress';
import { DeliveryOptions } from './pages/customer/cart/DeliveryOptions';
import { Payment } from './pages/customer/cart/Payment';
import { OrderSummary } from './pages/customer/cart/OrderSummary';
import { OrderList } from './pages/customer/post-order/OrderList';
import { OrderTracking } from './pages/customer/post-order/OrderTracking';
import { ReturnReplacement } from './pages/customer/post-order/ReturnReplacement';
import { RefundStatus } from './pages/customer/post-order/RefundStatus';
import { ReviewsRatings } from './pages/customer/post-order/ReviewsRatings';

// Vendor Pages
import { SellerSignup } from './pages/vendor/onboarding/SellerSignup';
import { Kyc } from './pages/vendor/onboarding/Kyc';
import { Agreement } from './pages/vendor/onboarding/Agreement';
import { StatusPage } from './pages/vendor/onboarding/StatusPage';
import { AddNew } from './pages/vendor/product/AddNew';
import { BulkUpload } from './pages/vendor/product/BulkUpload';
import { MyProducts } from './pages/vendor/product/MyProducts';
import { EditProduct } from './pages/vendor/product/EditProduct';
import { SetOffers } from './pages/vendor/product/SetOffers';
import { Inventory } from './pages/vendor/product/Inventory';
import { OrdersList } from './pages/vendor/order-management/OrdersList';
import { OrderDetail } from './pages/vendor/order-management/OrderDetail';
import { TrackingUpdate } from './pages/vendor/order-management/TrackingUpdate';
import { DispatchConfirmation } from './pages/vendor/order-management/DispatchConfirmation';
import { SalesReport } from './pages/vendor/finance/SalesReport';
import { SettlementStatement } from './pages/vendor/finance/SettlementStatement';
import { PendingPayouts } from './pages/vendor/finance/PendingPayouts';
import { CommissionDeduction } from './pages/vendor/finance/CommissionDeduction';
import { ReturnRequestList } from './pages/vendor/return/ReturnRequestList';
import { ReturnRefundDetail } from './pages/vendor/return/ReturnRefundDetail';
import { ApproveRejectHold } from './pages/vendor/return/ApproveRejectHold';

// Admin Pages
import { ApprovalList } from './pages/admin/vendor-management/ApprovalList';
import { DetailPage } from './pages/admin/vendor-management/DetailPage';
import { BlacklistedVendors } from './pages/admin/vendor-management/BlacklistedVendors';
import { Performance } from './pages/admin/vendor-management/Performance';
import { Approvals } from './pages/admin/product-management/Approvals';
import { DetailReview } from './pages/admin/product-management/DetailReview';
import { Categories } from './pages/admin/product-management/Categories';
import { FeatureRecommendation } from './pages/admin/product-management/FeatureRecommendation';
import { MasterList } from './pages/admin/order-management/MasterList';
import { DetailRefundsReplacements } from './pages/admin/order-management/DetailRefundsReplacements';
import { EscalationCases } from './pages/admin/order-management/EscalationCases';
import { RefundOverride } from './pages/admin/order-management/RefundOverride';
import { Email } from './pages/admin/marketing/Email';
import { Coupon } from './pages/admin/marketing/Coupon';
import { OrderToCourier } from './pages/admin/logistics/OrderToCourier';
import { DeliveryDashboard } from './pages/admin/logistics/DeliveryDashboard';
import { CourierPartnerPage } from './pages/admin/logistics/CourierPartnerPage';
import { Commission } from './pages/admin/finance/Commission';
import { VendorReport } from './pages/admin/finance/VendorReport';
import { DisputeResolution } from './pages/admin/finance/DisputeResolution';
import { TransactionReport } from './pages/admin/finance/TransactionReport';
import { Sales } from './pages/admin/analytics/Sales';
import { Vendor } from './pages/admin/analytics/Vendor';
import { Customer } from './pages/admin/analytics/Customer';
import { LandingPage } from './pages/LandingPage';
import { SitemapApproval } from './pages/SitemapApproval';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Landing Page */}
          <Route index element={<LandingPage />} />
          
          {/* Sitemap Approval Tool */}
          <Route path="sitemap-approval" element={<SitemapApproval />} />
          
          {/* Customer Routes */}
          <Route path="customer/onboarding/signup" element={<SignUp />} />
          <Route path="customer/onboarding/signin" element={<SignIn />} />
          <Route path="customer/onboarding/forgot-password" element={<ForgotPassword />} />
          <Route path="customer/onboarding/profile-setup" element={<ProfileSetup />} />
          <Route path="customer/onboarding/kyc-upload" element={<KycUpload />} />
          <Route path="customer/onboarding/my-account" element={<MyAccount />} />
          <Route path="customer/browsing/homepage" element={<Homepage />} />
          <Route path="customer/browsing/category-listing" element={<CategoryListing />} />
          <Route path="customer/browsing/sub-category" element={<SubCategory />} />
          <Route path="customer/browsing/search-result" element={<SearchResult />} />
          <Route path="customer/browsing/product-detail" element={<ProductDetail />} />
          <Route path="customer/browsing/seller-profile" element={<SellerProfile />} />
          <Route path="customer/cart/cart-page" element={<CartPage />} />
          <Route path="customer/cart/shipping-address" element={<ShippingAddress />} />
          <Route path="customer/cart/delivery-options" element={<DeliveryOptions />} />
          <Route path="customer/cart/payment" element={<Payment />} />
          <Route path="customer/cart/order-summary" element={<OrderSummary />} />
          <Route path="customer/post-order/order-list" element={<OrderList />} />
          <Route path="customer/post-order/order-tracking" element={<OrderTracking />} />
          <Route path="customer/post-order/return-replacement" element={<ReturnReplacement />} />
          <Route path="customer/post-order/refund-status" element={<RefundStatus />} />
          <Route path="customer/post-order/reviews-ratings" element={<ReviewsRatings />} />

          {/* Vendor Routes */}
          <Route path="vendor/onboarding/seller-signup" element={<SellerSignup />} />
          <Route path="vendor/onboarding/kyc" element={<Kyc />} />
          <Route path="vendor/onboarding/agreement" element={<Agreement />} />
          <Route path="vendor/onboarding/status-page" element={<StatusPage />} />
          <Route path="vendor/product/add-new" element={<AddNew />} />
          <Route path="vendor/product/bulk-upload" element={<BulkUpload />} />
          <Route path="vendor/product/my-products" element={<MyProducts />} />
          <Route path="vendor/product/edit-product" element={<EditProduct />} />
          <Route path="vendor/product/set-offers" element={<SetOffers />} />
          <Route path="vendor/product/inventory" element={<Inventory />} />
          <Route path="vendor/order-management/orders-list" element={<OrdersList />} />
          <Route path="vendor/order-management/order-detail" element={<OrderDetail />} />
          <Route path="vendor/order-management/tracking-update" element={<TrackingUpdate />} />
          <Route path="vendor/order-management/dispatch-confirmation" element={<DispatchConfirmation />} />
          <Route path="vendor/finance/sales-report" element={<SalesReport />} />
          <Route path="vendor/finance/settlement-statement" element={<SettlementStatement />} />
          <Route path="vendor/finance/pending-payouts" element={<PendingPayouts />} />
          <Route path="vendor/finance/commission-deduction" element={<CommissionDeduction />} />
          <Route path="vendor/return/return-request-list" element={<ReturnRequestList />} />
          <Route path="vendor/return/return-refund-detail" element={<ReturnRefundDetail />} />
          <Route path="vendor/return/approve-reject-hold" element={<ApproveRejectHold />} />

          {/* Admin Routes */}
          <Route path="admin/vendor-management/approval-list" element={<ApprovalList />} />
          <Route path="admin/vendor-management/detail-page" element={<DetailPage />} />
          <Route path="admin/vendor-management/blacklisted-vendors" element={<BlacklistedVendors />} />
          <Route path="admin/vendor-management/performance" element={<Performance />} />
          <Route path="admin/product-management/approvals" element={<Approvals />} />
          <Route path="admin/product-management/detail-review" element={<DetailReview />} />
          <Route path="admin/product-management/categories" element={<Categories />} />
          <Route path="admin/product-management/feature-recommendation" element={<FeatureRecommendation />} />
          <Route path="admin/order-management/master-list" element={<MasterList />} />
          <Route path="admin/order-management/detail-refunds-replacements" element={<DetailRefundsReplacements />} />
          <Route path="admin/order-management/escalation-cases" element={<EscalationCases />} />
          <Route path="admin/order-management/refund-override" element={<RefundOverride />} />
          <Route path="admin/marketing/email" element={<Email />} />
          <Route path="admin/marketing/coupon" element={<Coupon />} />
          <Route path="admin/logistics/order-to-courier" element={<OrderToCourier />} />
          <Route path="admin/logistics/delivery-dashboard" element={<DeliveryDashboard />} />
          <Route path="admin/logistics/courier-partner-page" element={<CourierPartnerPage />} />
          <Route path="admin/finance/commission" element={<Commission />} />
          <Route path="admin/finance/vendor-report" element={<VendorReport />} />
          <Route path="admin/finance/dispute-resolution" element={<DisputeResolution />} />
          <Route path="admin/finance/transaction-report" element={<TransactionReport />} />
          <Route path="admin/analytics/sales" element={<Sales />} />
          <Route path="admin/analytics/vendor" element={<Vendor />} />
          <Route path="admin/analytics/customer" element={<Customer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
