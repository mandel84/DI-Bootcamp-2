#ex1
# my_fav_numbers = {4,43}
# print(type(my_fav_numbers))
# add1 =  my_fav_numbers.add(23)
# add1 =  my_fav_numbers.add(34)
# my_fav_numbers.pop()
# print(my_fav_numbers)
# friend_fav_numbers = {2,44}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

#ex2
# it's not possible

#ex3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove('Banana')
# basket.remove('Blueberries')
# basket.append('kiwi')
# basket.insert(0,'Apples')
# apples_count = basket.count("Apples")        
# print(basket)
# print(apples_count)
# basket.clear()
# print(basket)

#ex4
#floats have decimals
# start = 1.5
# add = 0.5
# end = 5
# sequence = [1.5 + 0.5* i for i in range(8)]
# print(sequence)

#ex5
# numbers = range(20)
# for i in (numbers):
#     print(i+1)
# for i in numbers:
#     if i % 2 == 0:
#         print(i+2) 
# numbers_even = [number for number  in range(22) if (number % 2 == 0)]  
# print(numbers_even)
# 
# #ex6
# my_name = True
# while my_name:
#     user_name = input('What is your name? ').lower() 
#     if user_name == 'jorge':
#         my_name = False 

#ex7
# user_fruit_list = []
# user_fav_fruits = input('What is your favorite fruits?(separate the fruits with a single space): ').split()
# user_fruit_list.extend(user_fav_fruits)
# user_name_of_fruit = input('Write a name of one fruit: ')

# if user_name_of_fruit in user_fruit_list:
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')

#ex8
# topping = 2.5
# pizza_toppings = []
# pizza = 10
# while True:
#     user_pizza_toppings = input('Which toppings do you want to add to your pizza? ')
#     if user_pizza_toppings == 'quit':
#         break
#     else:
#         pizza_toppings.append(user_pizza_toppings)
#         print(f"You'll add {user_pizza_toppings} to your pizza")
# total_price = pizza + topping * len(pizza_toppings)   
# print('\nToppings on ypur pizza are: ')
# for topping in pizza_toppings:
#         print(f'- {topping}')
# print(f'\n Total price: ${total_price:.2f}')        
# print(f'Your toppings are {pizza_toppings} and the total price is ${total_price:2f}')  

#ex9
# total_cost = 0
# family_tickets = int(input('How many tickets do you want? '))
# for member in range(1,family_tickets +1):
#     family_ages = int(input(f'Which is the age of member {family_tickets}? '))
#     if family_ages < 3:
#             ticket_price = 0
#     elif 3 <= family_ages <= 12:
#             ticket_price = 10
#     else:
#             ticket_price = 15
#     total_cost += ticket_price
# print(f'the total cost for your family is ${total_cost:.2f}')  
# list_names = ['Josef','Lior','Amit','Agam']

# for name in list_names[:]:
#     age = int(input(f'Hi,{name}.How old are you? '))
#     if 16 <= age <=21:
#          list_names.remove(name)
#         #  permitted_names.append(name)
# print(f'Final list of teenagers permitted to watch the movie: {list_names}')

#ex10
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")
# finished_sandwiches = []
# # Prepare the orders of the clients
# while sandwich_orders:
#     sandwich = sandwich_orders.pop(0)
#     finished_sandwiches.append(sandwich)
#     print(f"Finished making {sandwich}.")

# print("\nList of finished sandwiches:")
# for sandwich in finished_sandwiches:
#     print("- " + sandwich)




 
 



        



