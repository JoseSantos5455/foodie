import { EditOutlined } from '@ant-design/icons';

const ManageProfile = () => {
  return (
    <div className="py-6">
      <h3 className="font-semibold text-lg text-primaryDark capitalize  mb-6 pb-2 border-b-2 border-gray-50">
        Profile Info
      </h3>

      <div className="  grid grid-cols-2 gap-8 mx-auto">
        <div className="border relative bg-gray-50 shadow-md border-gray-200 rounded p-4">
          <p className="font-bold">
            FullName: <span className="ml-2">Zino</span>
          </p>
          <p className="font-bold my-4">
            City: <span className="ml-2">Casa</span>
          </p>
          <p className="font-bold mb-4">
            Address: <span className="ml-2">Casa , </span>
          </p>
          <p className="font-bold ">
            postalCode: <span className="ml-2">125444</span>
          </p>
          <div className="absolute -top-5 right-2 w-10 h-10 rounded-full flex-col text-white bg-black flex justify-center items-center">
            <EditOutlined />
            <span className="text-sm">Edit</span>
          </div>
        </div>
        <div className="flex justify-between flex-col">
          <div className="border relative bg-gray-50 shadow-md border-gray-200 rounded p-4">
            <p className="font-bold">
              Email: <span className="ml-2">Zino@gmail.com</span>
            </p>
            <div className="absolute -top-5 right-2 w-10 h-10 rounded-full flex-col text-white bg-black flex justify-center items-center">
              <EditOutlined />
              <span className="text-sm">Edit</span>
            </div>
          </div>
          <div className="border relative bg-gray-50 shadow-md border-gray-200 rounded p-4">
            <p className="font-bold">
              Password: <span className="ml-2">******</span>
            </p>
            <div className="absolute -top-5 right-2 w-10 h-10 rounded-full flex-col text-white bg-black flex justify-center items-center">
              <EditOutlined />
              <span className="text-sm">Edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
