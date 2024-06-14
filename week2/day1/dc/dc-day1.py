#1
user_string = input('Give me a string whit exactly 10 characters: ')
if len(user_string) < 10:
    print('String not long enough')
elif len(user_string) > 10:
    print('String too long')
else:
    print('Perfect string')
print(user_string[0],user_string[-1])
new_string = ""
for char in user_string:
    new_string += char
    print(new_string)    