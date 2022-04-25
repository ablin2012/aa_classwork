# Write a method, my_rotate!(array, amt), that accepts an array and a number as args.
# The method should mutate the array by rotating the elements 'amt' number of times. 
# When given a positive 'amt', a single rotation will rotate left, causing the first element to move to the last index
# When given a negative 'amt', a single rotation will rotate right, causing the last element to move to the first index
# The method should return the given array.
# Do not use the built-in Array#rotate
# 
# Note: this method must MUTATE the input array. This means that the object_id of the input array should be identical
# to the object_id of the returned array. The exact object_ids you get back don't matter. We just want the ids
# to be the same before and after calling your method.

#require "byebug"
def my_rotate!(array, amt)
  store = []
  array.each {|ele| store << ele} # store = ["NOMAD", "SOHO", "TRIBECA"]
  if amt > 0 # amt = 1
    i = array.length - 1 # i = 2
    while i >= 0
      #debugger
      array[i-amt] = store[i] # a[1] = s[2] -> a[0] = s[1] -> a[-1] = s[0]
      i -= 1 # i = 1 -> i = 0
    end
    return array
  elsif amt < 0
    i = -array.length
    while i < 0 
      array[i-amt] = store[i]
      i += 1
    end
    return array
  end
end


array_1 = ["a", "b", "c", "d"]
p array_1.object_id                 # => 70354216023780
result_1 = my_rotate!(array_1, 2)
p result_1                          # => ["c", "d", "a", "b"]
p result_1.object_id                # => 70354216023780


array_2 = ["NOMAD", "SOHO", "TRIBECA"]
p array_2.object_id                 # => 70354216019660
result_2 = my_rotate!(array_2, 1)
p result_2                          # => ["SOHO", "TRIBECA", "NOMAD"]
p result_2.object_id                # => 70354216019660


array_3 = ["a", "b", "c", "d"]
p array_3.object_id                 # => 70354216016500
result_3 = my_rotate!(array_3, -3)
p result_3                          # => ["b", "c", "d", "a"]
p result_3.object_id                # => 70354216016500
