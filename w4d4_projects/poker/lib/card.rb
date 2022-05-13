class Card
    SUIT = [:H, :D, :C, :S]

    attr_reader :value, :suit
    def initialize(value, suit)
        raise "invalid value" if !value.between?(1,13)
        raise "invalid suit" if !SUIT.include?(suit)
        @value = value
        @suit = suit
    end
end