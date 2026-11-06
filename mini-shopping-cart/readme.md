# Mini Shopping Cart

## Project Description

Mini Shopping Cart is a simple, interactive command-line program written in Python. It lets you add products with prices, view the products in your cart and their total, or remove a product by name. The cart is kept in memory while the program runs.

## Features

- **Add Product:** Enter a product name and price. Product names are trimmed of leading and trailing spaces, and negative prices are rejected.
- **View Products:** Display each product and price, followed by the cart total.
- **Remove Product:** Remove the first product whose name matches your entry, ignoring capitalization and surrounding spaces. A message is shown if no match is found.
- **Exit:** Choose the exit option to end the program.

## Technologies Used

- Python

## How to Run the Project

1. Make sure Python is installed.
2. Open a terminal in the project folder.
3. Run:

   ```text
   python shopping_cart.py
   ```

4. Choose an option by entering `1`, `2`, `3`, or `4` at the menu prompt.

## How the Shopping Cart Works

When the program starts, it creates an empty cart and displays a menu. The cart exists only for the current run of the program; its contents are not saved after you exit.

- Choose `1` to enter a product name and price. The price is read as a number, and negative prices are not added.
- Choose `2` to see the products currently in the cart and their combined total. The total is displayed to two decimal places.
- Choose `3` to enter a product name to remove. Matching ignores capitalization, and only the first matching product is removed.
- Choose `4` to exit.

An unrecognized menu entry displays an “Invalid Choice” message. The program expects the price input to be numeric.

## Example Usage

```text
======SHOPPING CART SYSTEM=====
1.Add Product
2.View Product
3.Remove Product
4.Exit
Enter your choice: 1
Enter your product: Apples
Enter Price: 2.5
Product Added Successfully!
Enter your choice: 2
------SHOPPING CART------
Apples : $2.5
--------------------------
Total : $2.50
Enter your choice: 4
Thank You For Shopping!
```
