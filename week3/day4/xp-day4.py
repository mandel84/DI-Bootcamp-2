import random
import os

def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().splitlines()
    return words

def get_random_sentence(length, words):
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words).lower()
    return sentence

def main():
    print("Welcome to the random sentence generator!")
    print("This program generates a random sentence of a specified length.")
    print("Current working directory:", os.getcwd())
    
    try:
        length = int(input("How long do you want the sentence to be? (2-20): "))
        
        if length < 2 or length > 20:
            raise ValueError("The length must be between 2 and 20.")
        
        words = get_words_from_file('words.txt')
        sentence = get_random_sentence(length, words)
        print("Generated sentence:", sentence)
    
    except FileNotFoundError:
        print("Error: The file 'words.txt' was not found.")
    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()

#ex2
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)
salary = data['company']['employee']['payable']['salary']
print("Salary:", salary)

data['company']['employee']['birth_date'] = '1990-01-01'
with open('updated_employee.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Updated JSON saved to 'updated_employee.json'.")


