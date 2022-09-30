import { ICart } from '@/app/slices/cartSlice';
import { ICartItem, IOrderItems, IProduct, IProductRes } from '@/types/types';

export const calculateDiscount = (originalPrice: number, discountPercentage: number = 0) =>
  originalPrice - (originalPrice * discountPercentage) / 100;

export function compareObjs(a: any, b: any) {
  let diffrence: any = {};
  for (const key in a) {
    if (a[key] !== b[key]) {
      diffrence[key] = a[key];
    }
  }
  return diffrence;
}

export const calcSubTotal = (cart: any) => {
  if (cart.length !== 0) {
    return cart
      .reduce((sum: any, i: any) => {
        return sum + i.price * i.qty;
      }, 0)
      .toFixed(2);
  }
};

export const displayTime = (timestamp: string) => {
  const date = new Date(timestamp);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() + ':' + date.getMinutes();
  return `${monthNames[monthIndex]} ${day}, ${year} at ${hour}`;
};

export const formProductData = (data: any): FormData => {
  const formData = new FormData();
  for (const key in data) {
    if (key === 'image') {
      formData.append(key, data[key][0]);
    }else if(key === 'originalPrice' || key === 'discountPercentage'){
        formData.append(`pricing[${key}]`, data[key]);
    }else if(key === 'countryOfProduction' || key === 'weight' || key === 'model'){
        formData.append(`specs[${key}]`, data[key]);
    }
     else {
      formData.append(key, data[key]);
    }
  }

  return formData;
};

export const formVariantKey = (size?: string | null, color?: string | null) => {
  if (size && color) return `${size}*${color}`;
  else if (size) return size;
  else if (color) return color;
  else return null;
};

export const formVariant = (
  variantKey: string | null,
  size: string | null | undefined,
  color: string | null | undefined,
) => {
  let variant = null;
  if (variantKey) {
    variant = { key: variantKey, size: size || null, color: color || null, qty: 1 };
  }
  return variant;
};

export const formCartItem = (product: IProductRes, size?: string | null, color?: string | null) => {
  return {
    title: product.title,
    slug: product.slug,
    productId: product._id,
    image: product.image,
    price: product.pricing.discountPercentage
      ? calculateDiscount(product.pricing.originalPrice, product.pricing.discountPercentage)
      : product.pricing.originalPrice,
    qty: 1,
    variant: formVariant(formVariantKey(size, color), size, color),
  };
};

export const formOrderItems = (cart: ICart[]): (ICart | IOrderItems)[] =>
  cart.map((item): IOrderItems | ICart => {
    if (item.variants) {
      return { ...item, variants: Object.values(item.variants) };
    } else return item;
  });

export const countCartItems = (cart: ICart[]) => {
  if (cart.length !== 0) {
    return cart
      .reduce((sum: number, curr: ICart) => {
        return sum + curr.qty;
      }, 0)
  }
};