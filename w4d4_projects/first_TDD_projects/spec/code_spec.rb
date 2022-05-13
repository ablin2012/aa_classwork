require "code"

describe Array do
    describe '#my_uniq' do
        before(:each) do
            expect_any_instance_of(Array).not_to receive(:uniq)
        end
        it 'should return an array of unique elements' do
            expect([1, 2, 1, 3, 3].my_uniq).to eq([1,2,3])
        end
    end

    describe '#two_sum' do
        it 'should return the index pairs of elements that sum to zero' do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0,4], [2, 3]])
        end

        it 'should return an empty array if no pairs sum to zero' do
            expect([1, 2, 3, 4].two_sum).to be_empty
        end
        
        it 'should return pairs in sequential order' do
            expect([-1, 0, 2, -2, 1].two_sum).to_not eq([[2, 3], [0,4]])
        end
    end

    describe '#my_transpose' do
        before(:each) do
            expect_any_instance_of(Array).not_to receive(:transpose)
        end

        it 'should return an array with the subarrays transposed' do
            expect([[0, 1, 2], [3, 4, 5], [6, 7, 8]].my_transpose).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
        end
    end

    describe '#stock_picker' do
        it 'should return the most profitable pair of days on which to buy and sell' do
            expect([100, 20, 30, 200, 100, 300].stock_picker).to eq([1,5])
        end

        it 'should have the buy day be before the sell day' do
            days = [100, 20, 30, 200, 100, 300].stock_picker
            expect(days[0]).to be < days[1]
        end
    end
end