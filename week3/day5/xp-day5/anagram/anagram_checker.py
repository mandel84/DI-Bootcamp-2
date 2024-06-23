class AnagramChecker:
    def __init__(self, word_list_file='words.txt'):
        with open(word_list_file, 'r') as file:
            self.words = set(file.read().split())

    def is_valid_word(self, word):
        return word.lower() in self.words

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.words if self.is_anagram(word, w) and w != word]
