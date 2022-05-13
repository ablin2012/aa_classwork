require "deck"

describe Deck do
    subject(:deck) {Deck.new}
    describe '#initialize' do
        it 'should create a deck of 52 cards' do
            expect(deck.deck_of_cards.length).to eq(52)
        end
    end 

    describe '#shuffle_deck' do
        it 'should shuffle our deck of cards' do
            expect(deck.deck_of_cards).to receive(:shuffle!) 
            deck.shuffle_deck
        end
    end
end