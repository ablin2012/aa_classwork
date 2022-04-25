# Write a method, is_sorted(arr), that accepts an array of numbers as an arg.
# The method should return true if the elements are in increasing order, false otherwise.
# Do not use the built-in Array#sort in your solution :)
def is_sorted(arr)
  arr.each_with_index do |num1, idx1|
    arr.each_with_index do |num2, idx2|
      if idx2 > idx1
        if num1 > num2
          return false
        else
          break
        end
      end
    end
  end
  return true
end

p is_sorted([1, 4, 10, 13, 15])       # => true
p is_sorted([1, 4, 10, 10, 13, 15])   # => true
p is_sorted([1, 2, 5, 3, 4 ])         # => false
