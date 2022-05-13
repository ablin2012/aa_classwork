require "game"

describe TowerOfHanoi do
    subject(:game) { TowerOfHanoi.new(3)}
    

    describe '#initialize' do
        it "initializes with disk_count, stack_1, stack_2, and stack_3" do 
            expect(game.disk_count).to eq(3)
            expect(game.stack_1).to eq([0, 1, 2])
            expect(game.stack_2).to eq([])
            expect(game.stack_3).to eq([])
        end

        it 'should raise an error if disks is not greater than 2' do
            expect{ TowerOfHanoi.new(2) }.to raise_error(ArgumentError)
        end
        
        it 'should set stack 2 and stack 3 to be empty arrays' do 
            expect(game.stack_2).to be_empty
            expect(game.stack_3).to be_empty
        end
    end

    describe '#move' do
        it 'should receive a user input' do
            expect{game.move(1,2)}.to_not raise_error
        end

        it 'should raise an error if the user tries move a disk from a stack to the same stack' do
            expect{ game.move(1,1) }.to raise_error('must move disk to another stack')
        end
    end

    describe '#won?' do
        context 'when the player has won' do
            before(:each) do
                game.move(1, 3)
                game.move(1, 2)
                game.move(3, 2)
                game.move(1, 3)
                game.move(2, 1)
                game.move(2, 3)
                game.move(1, 3)
            end
            
            it 'should return true if stack 3 contains all disks' do
               expect(game.won?).to be(true)
            end
        end

        context 'when the player has not won' do
            it 'should return false' do
                expect(game.won?).to be(false)
            end
        end
    end
end