import { useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { IUser, IOrderRes } from 'types/types';
import SideNav from './SideNav';
import { useAppSelector } from 'app/store';
import { getProfileStart } from 'app/slices/profileSlice';
import { useDispatch } from 'react-redux';
import { getOrderStart } from 'app/slices/orderSlice';
import Loading from 'components/loaders/Loading';

type ContextType = [IUser, IUser, IOrderRes[]];

const Profile = () => {
  const { profile, auth, orders, isLoadingProfile, isLoadingOrder, isLoadingAuth } = useAppSelector((state) => ({
    profile: state.profile,
    auth: state.auth,
    orders: state.orders,
    isLoadingProfile: state.loadingState.isLoadingProfile,
    isLoadingOrder: state.loadingState.isLoadingOrder,
    isLoadingAuth: state.loadingState.isLoadingAuth,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile?.id) {
      dispatch(getProfileStart(auth?.token));
    }
    if (orders?.length === 0) {
      dispatch(getOrderStart(auth?.token));
    }
  }, [profile, dispatch, auth.token, orders.length]);
  return (
    <section className="py-10">
      {(isLoadingOrder || isLoadingProfile || isLoadingAuth) && <Loading />}
      <div className=" lg:grid lg:grid-cols-4 xl:gap-12 gap-6 overflow-hidden">
        <SideNav dispatch={dispatch} username={profile?.fullName} />
        <div className="col-span-3 bg-white p-4 shadow-md rounded">
          <Outlet context={[profile, auth, orders]} />
        </div>
      </div>
    </section>
  );
};

export function useUserProfile() {
  return useOutletContext<ContextType>();
}

export default Profile;
