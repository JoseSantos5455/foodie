import { useAppSelector } from '@/app/store';
import { useEffect } from 'react';
import { delUsersStart, getUsersStart } from '@/app/slices/usersSlice';
import { useDispatch } from 'react-redux';
import Loading from '@/components/loaders/Loading';

const AllUsers = () => {
  const { users, token, isLoadingUsers, isErrorUsers } = useAppSelector((state) => ({
    users: state.users,
    token: state.auth.token,
    isLoadingUsers: state.loadingState.isLoadingUsers,
    isErrorUsers: state.errorState.isErrorUsers,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersStart(token));
    }
  }, [dispatch, users.length, token]);

  const onDelUser = (email: string) => dispatch(delUsersStart({ email, token }));

  return (
    <section className="py-6 bg-white mt-6">
      {isLoadingUsers && <Loading />}
      {!isErrorUsers && users.length > 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-md mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  user name
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  phone number
                </th>
                <th scope="col" className="px-6 py-3">
                  role
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user._id} className="bg-white border-b  ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                      {user.fullName}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4 text-right">
                      <span
                        onClick={() => onDelUser(user.email)}
                        className="font-medium text-red-600 cursor-pointer hover:underline"
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AllUsers;
