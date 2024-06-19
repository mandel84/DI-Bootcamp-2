# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self) -> str:
#         return f'{self.amount} {self.currency}s'
#     def __int__(self):
#         return self.amount

#     def __repr__(self) -> str:
#         return f'{self.__str__()}'
    
#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 return Currency(self.currency, self.amount + other.amount)
#             else:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         elif isinstance(other, int):
#             return Currency(self.currency, self.amount + other)
#         else:
#             raise TypeError("Unsupported operand type(s) for +")

#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount += other.amount
#             else:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         elif isinstance(other, int):
#             self.amount += other
#         else:
#             raise TypeError("Unsupported operand type(s) for +=")
#         return self


# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1 + 5)         
# print(c1 + c2)         

# c1 += 5
# print(c1)             
# c1 += c2
# print(c1)             

# try:
#     print(c1 + c3)     
# except TypeError as e:
#     print(e)


#ex3
# import random
# import string

# def generate_random_string(length=5):
#     letters = string.ascii_letters  # This contains both uppercase and lowercase letters
#     return ''.join(random.choice(letters) for _ in range(length))

# # Example usage
# random_string = generate_random_string()
# print(random_string)

#ex4
# from datetime import datetime

# def display_current_date():
#     current_date = datetime.now().date()
#     print(f"Current date: {current_date}")

# display_current_date()

#ex5
# from datetime import datetime, timedelta

# def time_until_new_year():
#     now = datetime.now()
#     next_year = now.year + 1
#     new_year = datetime(next_year, 1, 1)
    
#     time_difference = new_year - now
#     days = time_difference.days
#     hours, remainder = divmod(time_difference.seconds, 3600)
#     minutes, seconds = divmod(remainder, 60)
    
#     print(f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours.")

# time_until_new_year()

#ex6
# from datetime import datetime

# def minutes_lived(birthdate_str, date_format="%Y-%m-%d"):
#     birthdate = datetime.strptime(birthdate_str, date_format)
#     now = datetime.now()
#     time_difference = now - birthdate
#     minutes_lived = time_difference.total_seconds() // 60
#     print(f"You have lived for {int(minutes_lived)} minutes.")
# birthdate = "1984-05-04"  
# minutes_lived(birthdate)

#ex7
# from faker import Faker

# fake = Faker()
# users = []
# def add_fake_user(users_list):
#     user = {
#         'name': fake.name(),
#         'address': fake.address(),
#         'language_code': fake.language_code()
#     }
#     users_list.append(user)

# for _ in range(5):  
#     add_fake_user(users)

# for user in users:
#     print(user)





