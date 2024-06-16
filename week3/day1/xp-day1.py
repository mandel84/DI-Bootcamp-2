# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat('Marina',28)        
# cat2 = Cat('Lisandra',25)        
# cat3 = Cat('Amanda',30)    
# cats = [cat1,cat2,cat3]
# def find_oldest_cat(cats):
#     oldest_cat = None
#     max_age = 0
#     for cat in cats:
#         if cat.age > max_age:
#             oldest_cat = cat
#             max_age = cat.age
#     return oldest_cat    
# cats = [cat1, cat2, cat3]
# oldest_cat = find_oldest_cat(cats)
# print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# #ex2
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         jump_height = self.height * 2
#         print(f"{self.name} jumps {jump_height} cm high!")

# davids_dog = Dog("Rex", 50)
# print("Details of David's dog:")
# print("Name:", davids_dog.name)
# print("Height:", davids_dog.height, "cm")
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", 20)
# print("\nDetails of Sarah's dog:")
# print("Name:", sarahs_dog.name)
# print("Height:", sarahs_dog.height, "cm")
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print("\nDavid's dog,", davids_dog.name, ", is bigger.")
# elif davids_dog.height < sarahs_dog.height:
#     print("\nSarah's dog,", sarahs_dog.name, ", is bigger.")
# else:
#     print("\nBoth dogs are of the same height.")

#ex3
# class Song:
#     def __init__(self,lyrics) -> None:
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#             for line in self.lyrics:
#               print(line)     
# ipanema = Song(["Olha q coisa mais linda","mais cheia de graça"]) 
# ipanema.sing_me_a_song()

#ex4
# class Zoo:
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []

#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)
#             print(f"{new_animal} has been added to the zoo.")
#         else:
#             print(f"{new_animal} is already in the zoo.")

#     def get_animals(self):
#         print("Animals in the zoo:")
#         for animal in self.animals:
#             print(animal)

#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#             print(f"{animal_sold} has been sold.")
#         else:
#             print(f"{animal_sold} is not in the zoo.")

#     def sort_animals(self):
#         self.animals.sort()

#     def get_groups(self):
#         groups = {}
#         for animal in self.animals:
#             first_letter = animal[0]
#             if first_letter not in groups:
#                 groups[first_letter] = [animal]
#             else:
#                 groups[first_letter].append(animal)

#         print("Animals grouped by first letter:")
#         for index, (letter, animals) in enumerate(groups.items(), 1):
#             if len(animals) == 1:
#                 print(f"{index}: {animals[0]}")
#             else:
#                 print(f"{index}: {animals}")

# ramat_gan_safari = Zoo("Ramat Gan Safari")

# ramat_gan_safari.add_animal("Lion")
# ramat_gan_safari.add_animal("Elephant")
# ramat_gan_safari.add_animal("Tiger")
# ramat_gan_safari.add_animal("Ape")
# ramat_gan_safari.add_animal("Baboon")
# ramat_gan_safari.add_animal("Bear")
# ramat_gan_safari.add_animal("Cat")
# ramat_gan_safari.add_animal("Cougar")
# ramat_gan_safari.add_animal("Eel")
# ramat_gan_safari.add_animal("Emu")

# ramat_gan_safari.get_animals()

# ramat_gan_safari.sell_animal("Tiger")
# ramat_gan_safari.get_animals()

# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups()


