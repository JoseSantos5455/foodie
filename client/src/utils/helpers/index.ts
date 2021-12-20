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
