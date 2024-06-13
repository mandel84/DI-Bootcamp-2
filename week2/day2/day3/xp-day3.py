 #ex1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# kv = zip(keys,values)
# print(dict(kv))
    
# #ex2
# ticket_prices = {
# "ticket_3" : 0,
# "ticket_3_to_12" : 10,
# "ticket_up_12" : 15
# }
# total = 0
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# for k,v in family.items():
#  if v <3:
#      ticket = ticket_prices["ticket_3"]
#  if 3 <= v <=12:
#       ticket = ticket_prices["ticket_3_to_12"]
#  else:
#         ticket = ticket_prices["ticket_up_12"] 
#  total += ticket
#  print(f"{k} has to pay ${ticket} for the movie")
# print(f"\n total cost for the family is ${total}")

# how_many = int(input("How many people in the family need tickets? "))

# def new_dict():
#     family = {}
#     for i in range(1,how_many + 1):
#         name = input(f"What is the name of person {i}? ")
#         age = int(input(f"What is the age of person {name}? "))
#         family[name] = age
#     return family

# family = new_dict()
# print(family)


#ex3
# brand = {
#     "name": "Zara" ,
# "creation_date": 1975 ,
# "creator_name": "Amancio Ortega Gaona" ,
# "type_of_clothes": ["men", "women", "children", "home"], 
# "international_competitors": ["Gap", "H&M", "Benetton"], 
# "number_stores": 7000 ,
# "major_color": {
#     "France": "blue", 
#     "Spain": "red", 
#     "US": ["pink", "green"]
# }}
     
# brand["number_stores"] =2
# brand["country_creation"]="Spain"
# brand["international_competitors"].append("Desigual") 
# del brand["creation_date"]
# print(brand)
# print(brand["international_competitors"][3])
# print(brand["major_color"]["US"])
# keys_dict =len(brand.keys())
# values_dict = len(brand.values())
# k_and_v_dict = keys_dict+values_dict
# print(k_and_v_dict)
# print(keys_dict)

# more_on_zara = {
#     "creation_date": 1975 ,
# "number_stores": 10000
# }
# brand.update(more_on_zara)
# print(brand)
# print(brand["number_stores"])

#ex4
# disney_users_A = {}
# disney_users_B = {}
# disney_users_C = {}
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# for index,user in enumerate(users):
#    disney_users_A[user] = index

#     # disney_users_A = {disney_users_A}
# print( disney_users_A) 
# for index,user in enumerate(users):
#    disney_users_B[index] = user
# print(disney_users_B)

# for index,user in enumerate(sorted(users)):
#    disney_users_C[user] = index
   
# print(disney_users_C)

# for index,user in enumerate(users):
#     if  "i" in user:
#      disney_users_A[user] = index
# print(disney_users_A)     

# for index,user in enumerate(users):
#     if  user.lower().startswith("m") or user.lower().startswith("p"):
#      disney_users_A[user] = index
# print(disney_users_A)    