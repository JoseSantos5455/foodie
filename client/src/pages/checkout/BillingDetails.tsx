import Button from 'components/UI/Button';
import { Link } from 'react-router-dom';
import { CHECKOUT_STEP_2, CHECKOUT_STEP_3 } from 'utils/routes';
import CheckoutSteps from './components/CheckoutSteps';

interface Props {}

const BillingDetails = (props: Props) => {
  return (
    <section className="py-10">
      <h1 className="text-center text-3xl font-main font-bold mb-4">Billing Details</h1>
      <div className=" max-w-screen-md mx-auto bg-white p-4 shadow-md rounded">
        <CheckoutSteps current={2} />
        <form className="grid grid-cols-2 gap-4 p-8">
          <div>
            <label className="block text-sm text-primaryDark font-secondary mb-1">Full Name</label>
            <input
              className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div>
            <label className="block text-sm text-primaryDark font-secondary mb-1">Email</label>
            <input
              className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
              type="email"
              placeholder="Your Email"
              aria-label="email"
            />
          </div>
          <div>
            <label className="block text-sm text-primaryDark font-secondary mb-1">Phone</label>
            <input
              className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
              type="phone"
              placeholder="Your phone number"
              aria-label="phone"
            />
          </div>
          <div>
            <label className="block text-sm text-primaryDark font-secondary mb-1">City</label>
            <input
              className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="Your city"
              aria-label="city"
            />
          </div>
          <div>
            <label className="block text-sm text-primaryDark font-secondary mb-1">Address</label>
            <input
              className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="Your address"
              aria-label="address"
            />
          </div>
          <div>
            <label className="block text-sm text-primaryDark font-secondary mb-1">zip code</label>
            <input
              className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="Your zipCode"
              aria-label="zip code"
            />
          </div>

          <div className="flex justify-between mt-6 items-center col-span-2">
            <Button theme="btn-outline-rounded">
              <Link to={CHECKOUT_STEP_2}>Back </Link>
            </Button>
            <Button theme="btn-rounded">
              <Link to={CHECKOUT_STEP_3}>Continue</Link>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BillingDetails;
