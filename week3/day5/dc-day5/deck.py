import random
from card import Card

class Deck:
    def __init__(self):
        self.cards = []
        self._create_deck()

    def _create_deck(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        if len(self.cards) != 52:
            self._create_deck()
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            return "No more cards to deal."
        return self.cards.pop()

if __name__ == "__main__":
    deck = Deck()
    deck.shuffle()
    print(deck.deal())
    print(deck.deal())
    print(len(deck.cards)) 
