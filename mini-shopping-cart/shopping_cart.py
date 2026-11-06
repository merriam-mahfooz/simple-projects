
def add_product(cart):
    product = input("Enter your product: ").strip()
    price = float(input("Enter Price: "))
    if price < 0:
        print("Price cannot be negative.")
        return
    cart.append([product, price])
    print("Product Added Successfully!")


def view_product(cart):
    total = 0
    print("------SHOPPING CART------")
    for item in cart:
        print(f"{item[0]} : ${item[1]}")
        total += item[1]
    print("--------------------------")
    print(f"Total : ${total:.2f}")


def remove_product(cart):
    remove_item = input("Enter product name to remove: ").strip()
    for item in cart:
        if item[0].lower() == remove_item.lower():
            cart.remove(item)
            print("Product removed successfully!")
            return

    print("Product not found.")


def main():
    cart = []
    print("======SHOPPING CART SYSTEM=====")
    print("1.Add Product")
    print("2.View Product")
    print("3.Remove Product")
    print("4.Exit")
    while True:
        choice = input("Enter your choice: ")
        if choice == "1":
            add_product(cart)
        elif choice == "2":
            view_product(cart)
        elif choice == "3":
            remove_product(cart)
        elif choice == "4":
            print("Thank You For Shopping!")
            break
        else:
            print("Invalid Choice.")


main()
