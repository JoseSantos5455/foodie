import { useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { IUser } from 'types/types';
import SideNav from './SideNav';
import { useAppSelector } from 'app/store';
import { getProfileStart } from 'app/slices/profileSlice';
import { useDispatch } from 'react-redux';

type ContextType = IUser[];

const Profile = () => {
  const { profile, auth } = useAppSelector((state) => ({
    profile: state.profile,
    auth: state.auth,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile.id) {
      dispatch(getProfileStart(auth?.token));
    }
  }, [profile, dispatch, auth.token]);
  return (
    <section className="py-10">
      <div className="grid grid-cols-4 gap-12">
        <SideNav />
        <div className="col-span-3 bg-white p-4 shadow-md rounded">
          <Outlet context={[profile, auth]} />
        </div>
      </div>
    </section>
  );
};

export function useProfile() {
  return useOutletContext<ContextType>();
}

export default Profile;
