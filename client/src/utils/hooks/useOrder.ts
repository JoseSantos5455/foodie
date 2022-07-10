import { calcSubTotal } from 'utils/helpers';
import { useEffect } from 'react';
import { useAppSelector } from 'app/store';
import { useDispatch } from 'react-redux';
import { getProfileStart } from 'app/slices/profileSlice';
import { IOrder } from 'types/types';

const useOrder = () => {
  const dispatch = useDispatch();

  const { profile, token, cart } = useAppSelector((state) => ({
    profile: state.profile,
    token: state.auth?.token,
    cart: state.cart,
  }));

  useEffect(() => {
    if (!profile.id) {
      dispatch(getProfileStart(token));
    }
  }, [profile, token, dispatch]);

  const subTotal = parseFloat(calcSubTotal(cart));
  const total = subTotal + 5;

  const newOrder: IOrder = {
    orderItems: cart,
    shippingInfo: {
      fullName: profile.fullName,
      city: profile.city,
      phone: profile.phone,
      isPhoneValidated: profile.isPhoneValidated,
      address: profile.address,
      zipCode: profile.zipCode,
    },
    paymentMethod: '',
    subTotal,
    total,
    shippingPrice: 5,
    isPaid: false,
  };
  return { newOrder, token, dispatch };
};

export default useOrder;
