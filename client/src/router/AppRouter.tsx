import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/UI/Layout';
import * as ROUTES from 'utils/routes';
import WithAdmin from './WithAdmin';
import WithAuth from './WithAuth';
import Loading from 'components/loaders/Loading';
import Admin from 'pages/admin';

const AddProduct = lazy(() => import('pages/admin/AddProduct'));
const Dashboard = lazy(() => import('pages/admin/Dashboard'));
const OrderDetails = lazy(() => import('pages/profile/OrderDetails'));
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
const AllOrders = lazy(() => import('pages/admin/AllOrders'));
const OrderDetail = lazy(() => import('pages/admin/OrderDetail'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.PRODUCT_DETAILS}
          element={
            <Suspense fallback={<Loading />}>
              <ProductDetails />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CART}
          element={
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_1}
          element={
            <Suspense fallback={<Loading />}>
              <WithAuth>
                <OrderSummary />
              </WithAuth>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_2}
          element={
            <Suspense fallback={<Loading />}>
              <WithAuth>
                <BillingDetails />
              </WithAuth>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_3}
          element={
            <Suspense fallback={<Loading />}>
              <WithAuth>
                <Payment />
              </WithAuth>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SHOP}
          element={
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.PROFILE_DASHBOARD}
          element={
            <Suspense fallback={<Loading />}>
              <WithAuth>
                <Profile />
              </WithAuth>
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <ProfileDashboard />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.WISHLIST}
            element={
              <Suspense fallback={<Loading />}>
                <Wishlist />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.MANAGE_PROFILE}
            element={
              <Suspense fallback={<Loading />}>
                <ManageProfile />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.PURCHASE_HISTORY}
            element={
              <Suspense fallback={<Loading />}>
                <PurchaseHistory />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.ORDER_DETAILS}
            element={
              <Suspense fallback={<Loading />}>
                <OrderDetails />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
      {/* Admin Pages Start */}
      <Route path={ROUTES.ADMIN_DASHBOARD} element={<Admin />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <WithAdmin>
                <Dashboard />
              </WithAdmin>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ADMIN_ADD_PRODUCT}
          element={
            <Suspense fallback={<Loading />}>
              <WithAdmin>
                <AddProduct />
              </WithAdmin>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ADMIN_ALL_ORDERS}
          element={
            <Suspense fallback={<Loading />}>
              <WithAdmin>
                <AllOrders />
              </WithAdmin>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ADMIN_VIEW_ORDER}
          element={
            <Suspense fallback={<Loading />}>
              <WithAdmin>
                <OrderDetail />
              </WithAdmin>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ADD_CATEGORY}
          element={
            <Suspense fallback={<Loading />}>
              <WithAdmin>
                <AddCategory />
              </WithAdmin>
            </Suspense>
          }
        />
      </Route>
      {/* Admin Pages Ends */}
    </Routes>
  );
};

export default AppRouter;
