import re
from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker()
    
    while True:
        print("Menu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ").strip()
        
        if choice == '2':
            break
        elif choice == '1':
            word = input("Enter a word: ").strip()
            
            if not re.match("^[A-Za-z]+$", word):
                print("Error: Only alphabetic characters are allowed.")
                continue
            
            if ' ' in word:
                print("Error: Only a single word is allowed.")
                continue
            
            word = word.lower()
            
            if checker.is_valid_word(word):
                anagrams = checker.get_anagrams(word)
                print(f"\nYOUR WORD: \"{word}\"")
                print("This is a valid English word.")
                if anagrams:
                    print("Anagrams for your word: " + ", ".join(anagrams))
                else:
                    print("No anagrams found.")
            else:
                print("The word is not a valid English word.")
        else:
            print("Invalid choice. Please choose 1 or 2.")
    
if __name__ == "__main__":
    main()
