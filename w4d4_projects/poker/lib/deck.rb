require_relative 'card.rb'
class Deck
    def initialize
        @deck_of_cards = []
        suits = [:H, :D, :C, :S]
        (1..13).each do |value|
            suits.each do |suit|
                deck_of_cards << Card.new(value, suit)
            end
        end
    end

    def shuffle_deck
        deck_of_cards.shuffle!
    end

    # private
    attr_reader :deck_of_cards
end