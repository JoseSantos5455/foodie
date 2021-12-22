import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/UI/Layout';
import * as ROUTES from 'utils/routes';

import WithAuth from './WithAuth';
const Profile = lazy(() => import('components/profile'));
const AddCategory = lazy(() => import('pages/admin/AddCategory'));
const PurchaseHistory = lazy(() => import('pages/profile/PurchaseHistory'));
const ManageProfile = lazy(() => import('pages/profile/ManageProfile'));
const Wishlist = lazy(() => import('pages/profile/Wishlist'));
const ProfileDashboard = lazy(() => import('pages/profile'));
const Cart = lazy(() => import('pages/cart'));
const Shop = lazy(() => import('pages/shop'));
const Login = lazy(() => import('pages/auth/Login'));
const Signup = lazy(() => import('pages/auth/Signup'));
const Payment = lazy(() => import('pages/checkout/Payment'));
const BillingDetails = lazy(() => import('pages/checkout/BillingDetails'));
const OrderSummary = lazy(() => import('pages/checkout/OrderSummary'));
const ProductDetails = lazy(() => import('pages/product'));
const Home = lazy(() => import('pages/home'));
const NotFound = lazy(() => import('pages/notFound'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<p>...loding</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.PRODUCT_DETAILS}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <ProductDetails />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CART}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_1}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <WithAuth>
                <OrderSummary />
              </WithAuth>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_2}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <WithAuth>
                <BillingDetails />
              </WithAuth>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_3}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <WithAuth>
                <Payment />
              </WithAuth>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SHOP}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.PROFILE_DASHBOARD}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <WithAuth>
                <Profile />
              </WithAuth>
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<p>...loding</p>}>
                <ProfileDashboard />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.WISHLIST}
            element={
              <Suspense fallback={<p>...loding</p>}>
                <Wishlist />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.MANAGE_PROFILE}
            element={
              <Suspense fallback={<p>...loding</p>}>
                <ManageProfile />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.PURCHASE_HISTORY}
            element={
              <Suspense fallback={<p>...loding</p>}>
                <PurchaseHistory />
              </Suspense>
            }
          />
        </Route>
        <Route
          path={ROUTES.ADD_CATEGORY}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <AddCategory />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<p>...loding</p>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
