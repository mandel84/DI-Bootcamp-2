class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def family_presentation(self):
        print(f'Family {self.last_name}:')
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

    def born(self, name, age, gender, is_child):
        new_member = {'name': name, 'age': age, 'gender': gender, 'is_child': is_child}
        self.members.append(new_member)
