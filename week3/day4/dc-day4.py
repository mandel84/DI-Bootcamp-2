from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text
    
    def word_frequency(self, word):
        words = self.text.split()
        word_count = Counter(words)
        return word_count.get(word, "The word is not in the text")
    
    def most_common_word(self):
        words = self.text.split()
        word_count = Counter(words)
        most_common = word_count.most_common(1)
        return most_common[0][0] if most_common else None
    
    def unique_words(self):
        words = self.text.split()
        unique_words_set = set(words)
        return list(unique_words_set)

text_string = "A good book would sometimes cost as much as a good house."
text_instance = Text(text_string)
print("Word frequency of 'good':", text_instance.word_frequency('good'))
print("Most common word:", text_instance.most_common_word())
print("Unique words:", text_instance.unique_words())


class Text:
    def __init__(self, text):
        self.text = text
    
    def word_frequency(self, word):
        words = self.text.split()
        word_count = Counter(words)
        return word_count.get(word, "The word is not in the text")
    
    def most_common_word(self):
        words = self.text.split()
        word_count = Counter(words)
        most_common = word_count.most_common(1)
        return most_common[0][0] if most_common else None
    
    def unique_words(self):
        words = self.text.split()
        unique_words_set = set(words)
        return list(unique_words_set)
    
    @classmethod
    def from_file(cls, file_path):
        try:
            with open(file_path, 'r') as file:
                text = file.read()
            return cls(text)
        except FileNotFoundError:
            print(f"Error: The file '{file_path}' was not found.")
            raise

file_path = 'the_stranger.txt'  
try:
    file_text_instance = Text.from_file(file_path)
    print("Most common word in file:", file_text_instance.most_common_word())
except FileNotFoundError:
    print("Please ensure the file is in the correct directory.")

    
