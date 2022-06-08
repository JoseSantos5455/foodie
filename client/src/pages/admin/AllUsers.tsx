import { useAppSelector } from 'app/store';
import { useEffect } from 'react';
import { getUsersStart } from 'app/slices/usersSlice';
import { useDispatch } from 'react-redux';

const AllUsers = () => {
  const { users, auth } = useAppSelector((state) => ({
    users: state.users,
    auth: state.auth,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersStart(auth.token));
    }
  }, [dispatch, users.length, auth.token]);

  return (
    <section className="py-6 bg-white mt-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-md">
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
                    <span className="font-medium text-red-600 dark:text-blue-500 hover:underline">delete</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
