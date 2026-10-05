# Shopping Cart Billing System 🛒

A simple JavaScript program that simulates the basic billing process of a small shop.

## How It Works

The program:

1. Takes a cart containing different products.
2. Groups repeated products and counts their quantities.
3. Uses a price list to get the price of each product.
4. Calculates the total price of each item based on its quantity.
5. Calculates the total bill.
6. Applies a discount if the total exceeds a specified amount.

## Example

```javascript
const cart = [
  "apple",
  "apple",
  "apple",
  "lipBalm",
  "lipBalm",
  "pen"
];
```

The products are grouped by quantity:

```javascript
{
  apple: 3,
  lipBalm: 2,
  pen: 1
}
```

The quantity and price of each product are then used to calculate the final bill.

## Concepts Used

- Arrays
- Objects
- Functions
- `reduce()`
- Loops
- Conditional statements
- Object destructuring