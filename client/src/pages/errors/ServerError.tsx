import { Link } from 'react-router-dom';

const ServerErorr = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="bg-gradient-to-br from-primary to-purpleBeta bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            500
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Internal Server error</h1>
              <p className="mt-1 text-base text-gray-500">
                The server encountered an internal error. Please try again later.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                to="/support"
                className="inline-flex items-center rounded-md border border-transparent bg-primaryLight px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primaryHover focus:ring-offset-2"
              >
                Contact support
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServerErorr;
