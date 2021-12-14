import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('this field is required').email('please enter a valid email'),
  password: Yup.string().required('this field is required').min(6, 'password must contain at least 6 characters'),
});

export const signupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('this field is required')
    .min(4, 'must contain more than 4 letter')
    .max(16, 'your name must contain less than 16 letters'),
  email: Yup.string().required('this field is required').email('please enter a valid email'),
  password: Yup.string().required('this field is required').min(6, 'password must contain at least 6 characters'),
});

export const billingSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('this field is required')
    .min(4, 'must contain more than 4 letter')
    .max(16, 'your name must contain less than 16 letters'),
  email: Yup.string().required('this field is required').email('please enter a valid email'),
  city: Yup.string().required('this field is required'),
  address: Yup.string().required('this field is required').max(200, 'address should contain less than 200 letters'),
  zipCode: Yup.string().required('this field is required').min(6, 'must be least 6 numbers'),
  phone: Yup.string().required('this field is required'),
});
