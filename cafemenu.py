# I made this Cafe menu which can take orders from the customer and can evaluate the amount itself .
# I used Python's basic concepts to create this project , Dictionary and Conditional statements are used to develop this project


# menu details
#to define the menu we use dictionary 

# {"key" : value}
menu = {
    
    
    "Cold coffee":80,
    "Pizza":100,
    "Burger":120,
    "Nachos":70,
    "Salad":90,
    "Chicken lollypop":140


}

#welcoming the customer

# (string is defined inside the bracket " ") 

print("Welcome to cafe 19")

# ( the menu is displayed to the customer in this form we used (\n) for next line )

print("Pizza : Rs.100\nCold coffe : Rs.80\nBurger : Rs.120\nNachos : Rs.70\nSalad : Rs.90\nChicken lollypop : Rs.140")

# we made a variable to accept the values and calculate them

order_total=0

item_1=input("Enter the order")

# here we used the conditional statements 
if item_1 in menu :
    order_total += menu[item_1]
    print(f"Your item {item_1} has been added to your order")

else:
    print(f" oops !!, Ordered item{item_1} is not currently available ,")
    
    # similarly we created another variable to take more orders 

another_order=input(" wait , going too early , have a look at the menu again !! (Yes/No) ")

# again using the conditonal statements 

if another_order =="Yes":
    item_2 = input("Enter the name of the second item")
if item_2 in menu:
    order_total += menu[item_2]
    print(f"item { item_2 } has been added to the order ")
else:
    print(f"ordered item {item_2} is not available")
print(f"The total amount of your order is {order_total}")


# hope you liked the project  







