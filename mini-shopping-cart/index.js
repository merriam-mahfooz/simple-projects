//grouping the cart items
function groupCartItems(cart) {
  let items = {};
  cart.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, items);
  calculateSubtotalAndTotal(items);
}
//calculating the subtotal and total amount
function calculateSubtotalAndTotal(cartItems) {
    //price list of the items
  const priceList = {
    apple: 30,
    lipBalm: 150,
    notebook: 80,
    pen: 20,
  };
  let total = 0;
  for (let key of Object.keys(cartItems)) {
    let subTotal = cartItems[key] * priceList[key];
    total += subTotal;
    console.log(`${key} ----- $${subTotal}`);
  }
  console.log(`Original Amount: $${total}`);
  //applying discount if total amount is greater than or equal to 300
  if (total >= 300) {
    total = total - total * 0.1;
    console.log("Discount: 10%");
  }
  console.log(`Total Amount: $${total}`);
}
groupCartItems([
  "apple",
  "apple",
  "apple",
  "lipBalm",
  "notebook",
  "pen",
  "pen",
]);
