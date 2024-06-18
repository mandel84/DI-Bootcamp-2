from family import Family

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    print(f"{name}'s power is {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old")
                break
        else:
            print(f"No member named {name} found.")

    def incredible_presentation(self):
        print(f"*Here is our powerful family **")
        super().family_presentation()
        for member in self.members:
            print(f"Incredible Name: {member['incredible_name']}, Power: {member['power']}")

    def born(self, name, age, gender, is_child, power, incredible_name):
        new_member = {'name': name, 'age': age, 'gender': gender, 'is_child': is_child, 'power': power, 'incredible_name': incredible_name}
        self.members.append(new_member)

incredible_family = TheIncredibles("Incredibles", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
])

incredible_family.incredible_presentation()
incredible_family.born('Jack', 1, 'Male', True, 'Unknown Power', 'BabyJack')
incredible_family.incredible_presentation()
