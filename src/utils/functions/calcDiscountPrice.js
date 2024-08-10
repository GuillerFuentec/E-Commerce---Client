export function calcDiscountPrice(discount, price) {
  if (!discount) return price;

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return finalPrice;
}
