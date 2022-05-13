class Array

    def my_uniq
        new_arr = []
        self.each do |ele|
            if !new_arr.include?(ele)
                new_arr << ele
            end
        end
        new_arr
    end

    def two_sum
        new_arr = []
        self.each_with_index do |ele1, i|
            self.each_with_index do |ele2, j|
                if ele1 + ele2 == 0 && i < j
                    new_arr << [i,j]
                end
            end
        end
        return new_arr
    end

    def my_transpose
        new_arr = Array.new(self.length) {Array.new}
        self.each do |row|
            (0...self.length).each do |i|
                new_arr[i] << row[i]
            end
        end
        new_arr
    end

    def stock_picker
        best_stocks = []
        difference = 0
        self.each_with_index do |ele1, i|
            self.each_with_index do |ele2, j|
                if ele2 - ele1 > difference && j > i
                    difference = ele2 - ele1
                    best_stocks = [i, j]
                end
            end
        end
        return best_stocks
    end
end