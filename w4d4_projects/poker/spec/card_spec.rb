require 'card'

describe Card do
    subject(:card) { Card.new(1, :D) }
    describe '#initialize' do
        it 'should take in a value and a suit' do
            expect{ Card.new(7, :H) }.to_not raise_error
        end

        it 'should set a value and a suit for the card' do 
            expect(card.value).to eq(1)
            expect(card.suit).to eq(:D)
        end

        it 'should raise an error if card value is not between 1 and 13' do
            expect{ Card.new(0, :H)}.to raise_error('invalid value')
            expect{ Card.new(15, :H)}.to raise_error('invalid value')
        end
        
        it 'should raise an error if card suit is invalid' do
            expect{ Card.new(1, :L)}.to raise_error('invalid suit')
        end
    end 
end