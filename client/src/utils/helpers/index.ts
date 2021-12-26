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
