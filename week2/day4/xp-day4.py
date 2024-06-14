# #ex1
# def display_message():
#     print('Hi, everyone.I am a student of Full Stack development.')
# display_message()    

# #ex2
# def favorite_book(title):
#     print(f'One of my favorite books is {title}')
# favorite_book('Wonderland')

# #ex3
# def describe_city(city,country='Brazil'):
#     print(f'the city {city} is in {country}')
# describe_city('Rio de Janeiro')    

#ex4
# import random
# def numbers(user_number):
#     random_number = random.randint(1,100)
#     if random_number == user_number:
#         print('Congratu;ations!, you did guess the correct number')
#     else:
#         print('Sorry, you did not guess the correct number')
#         print(f'Your number: {user_number}')
#         print(f'Random number: {random_number}')
# user_input = int(input('Enter a number between 1 and 100: ')) 
# numbers(user_input)  
# 
# #ex5     
# sizes = ['small','medium','xl']

# def make_shirt(size="large",text="I love Python"):
#     print(f'The size of the shirt is {size} and the text is {text}')
    
#     for size in sizes:
#         if size  == 'medium':
#              print(f'The size of the shirt is {size} and the text is {text}')
#         else:   
#              print(f'The size of the shirt is {size} and the text is different')

# make_shirt() 
# make_shirt(size='large') 

#ex6

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel'] 
# def show_magicians(names):
#     for name in names:
#      print(name)

# def make_great(names):
#     for i in range(len(names)):
#         names[i] += " the Great " 
         
   
# make_great(magician_names)
# show_magicians(magician_names)

#ex7
# import random

# def get_random_temp(season):
#     if season.lower() == 'summer':
#         return random.randint(16, 40)
#     elif season.lower() == 'autumn' or season.lower() == 'fall':
#         return random.randint(0, 23)
#     elif season.lower() == 'winter':
#         return random.randint(-10, 16)
#     elif season.lower() == 'spring':
#         return random.randint(0, 32)
#     else:
#         print("Invalid season. Please choose from 'summer', 'autumn', 'winter', or 'spring'.")

# def main():
#     season = input("Enter the current season (summer, autumn, winter, spring): ")
#     temperature = get_random_temp(season)
#     print(f"The temperature right now is {temperature} degrees Celsius.")

#     if temperature < 0:
#         print("Brrr, that's freezing! Wear some extra layers today.")
#     elif temperature >= 0 and temperature <= 16:
#         print("Quite chilly! Don't forget your coat.")
#     elif temperature > 16 and temperature <= 23:
#         print("The weather is mild. Enjoy!")
#     elif temperature > 23 and temperature <= 32:
#         print("It's warm today. Stay hydrated!")
#     else:
#         print("It's hot outside! Make sure to keep cool.")
# main()

#ex8
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# def ask_questions(data):
#     correct_answers = 0
#     incorrect_answers = 0
#     wrong_answers = []

#     for question_data in data:
#         question = question_data["question"]
#         answer = question_data["answer"]
        
#         user_answer = input(question + " ")

#         if user_answer.lower() == answer.lower():
#             print("Correct!")
#             correct_answers += 1
#         else:
#             print(f"Incorrect. The correct answer is {answer}.")
#             incorrect_answers += 1
#             wrong_answers.append({"question": question, "correct_answer": answer, "user_answer": user_answer})

#     return correct_answers, incorrect_answers, wrong_answers

# def inform_user(correct_answers, incorrect_answers, wrong_answers):
#     print("\nQuiz Results:")
#     print(f"Number of correct answers: {correct_answers}")
#     print(f"Number of incorrect answers: {incorrect_answers}")

#     if incorrect_answers > 0:
#         print("\nIncorrect answers:")
#         for answer in wrong_answers:
#             print(f"Question: {answer['question']}")
#             print(f"Correct answer: {answer['correct_answer']}")
#             print(f"Your answer: {answer['user_answer']}")
#             print()

# def main():
#     play_again = True
#     while play_again:
#         correct, incorrect, wrong = ask_questions(data)
#         inform_user(correct, incorrect, wrong)
        
#         if incorrect > 3:
#             play_again_input = input("You had more than 3 wrong answers. Do you want to play again? (yes/no) ")
#             if play_again_input.lower() != "yes":
#                 play_again = False
#         else:
#             play_again = False

# if __name__ == "__main__":
#     main()
