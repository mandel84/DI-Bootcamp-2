import random
from dog import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ', '.join([dog.name for dog in args])
        print(f'{dog_names} all play together')

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f'{self.name} does a barrel roll',
                f'{self.name} stands on his back legs',
                f'{self.name} shakes your hand',
                f'{self.name} plays dead'
            ]
            print(random.choice(tricks))
        else:
            print(f'{self.name} is not trained to do tricks yet')

if __name__ == "__main__":
    pet_dog1 = PetDog("Rex", 5, 30)
    pet_dog2 = PetDog("Buddy", 3, 25)
    pet_dog3 = PetDog("Max", 4, 20)

    pet_dog1.train()
    pet_dog1.do_a_trick()

    pet_dog2.do_a_trick()  
    pet_dog2.train()
    pet_dog2.do_a_trick()

    pet_dog3.train()
    pet_dog1.play(pet_dog2, pet_dog3)
    pet_dog3.do_a_trick()
