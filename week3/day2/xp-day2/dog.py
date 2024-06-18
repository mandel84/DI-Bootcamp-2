class Dog():
    def __init__(self,name,age,weight) -> None:
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self): 
        return self.weight/self.age * 10
    def fight(self,other_dog):
        self_power = self.run_speed() * self.weight
        other_dog_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_dog_power:
            return f'{self.name} won the fight against {other_dog.name}'
        elif self_power < other_dog_power:
            return f'{other_dog.name} won the fight against {self.name}'
        else:
            return 'It is a tie'

dog1 = Dog("Lucky", 5, 30)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Max", 4, 20)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(f'{dog1.name} runs at {dog1.run_speed()} speed')
print(f'{dog2.name} runs at {dog2.run_speed()} speed')
print(f'{dog3.name} runs at {dog3.run_speed()} speed')

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))
