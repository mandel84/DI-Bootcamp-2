# new dc-1
# def create_index_dictionary(word):
#     index_dict = {}
#     for index, letter in enumerate(word):
#         if letter in index_dict:
#             index_dict[letter].append(index)
#         else:
#             index_dict[letter] = [index]
#     return index_dict

# user_input = input("Please enter a word: ")
# result_dict = create_index_dictionary(user_input)
# print(result_dict)


#newdc-2
# def clean_price(price):
#     return float(price.replace("$", "").replace(",", ""))

# def affordable_items(items_purchase, wallet):
#     wallet_amount = clean_price(wallet)
#     affordable_list = [item for item, price in items_purchase.items() if clean_price(price) <= wallet_amount]
    
#     if not affordable_list:
#         return "Nothing"
    
#     affordable_list.sort()
#     return affordable_list

# items_purchase1 = {
#     "Water": "$1",
#     "Bread": "$3",
#     "TV": "$1,000",
#     "Fertilizer": "$20"
# }

# wallet1 = "$300"
# print(affordable_items(items_purchase1, wallet1))  

# items_purchase2 = {
#     "Apple": "$4",
#     "Honey": "$3",
#     "Fan": "$14",
#     "Bananas": "$4",
#     "Pan": "$100",
#     "Spoon": "$2"
# }

# wallet2 = "$100"
# print(affordable_items(items_purchase2, wallet2)) 

# items_purchase3 = {
#     "Phone": "$999",
#     "Speakers": "$300",
#     "Laptop": "$5,000",
#     "PC": "$1,200"
# }

# wallet3 = "$1"
# print(affordable_items(items_purchase3, wallet3))  
