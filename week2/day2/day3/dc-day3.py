#dc1
# #user_word = input("Word: ")
# letter_indexes = {}
# for index, letter in enumerate(user_word):
#     if letter not in letter_indexes:
#         letter_indexes[letter] = [index]
#     else:
#         letter_indexes[letter].append(index)   
# print(letter_indexes)
            
# word = input("Enter a word: ")
# letter_indexes = {}

# for index, letter in enumerate(word):
#     if letter not in letter_indexes:
#         letter_indexes[letter] = [index]
#     else:
#         letter_indexes[letter].append(index)

# print(letter_indexes)

##dc2
# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"
# affordable_items = []
# wallet = float(wallet.replace("$","").replace(",",""))


# for item,price in items_purchase.items():   
#     item_price = float(price.replace("$","").replace(",",""))
#     if item_price <= wallet:
#         affordable_items.append(item)
# affordable_items.sort()
# if affordable_items:
#     print("You can buy:",affordable_items)
# else:
#     print("notihing")            
