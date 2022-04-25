# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.
require "byebug"

def largest_prime_factor(num)
  i = num
  while i > 0
    return i if num % i == 0 && is_prime?(i)
    i -= 1
  end
end

def is_prime?(num)
  return false if num < 2
  return true if num == 2
  (2...num).each {|factor| return false if num % factor == 0}
  return true
end

def unique_chars?(str)
  str.each_char.with_index do |char1, idx1|
    str.each_char.with_index do |char2, idx2|
      if idx2 > idx1
        if char1 == char2
          return false
        end
      end
    end
  end
  return true
end

def dupe_indices(arr)
  dupes = {}
  final_dupes = {}
  arr.each_with_index do |ele, idx|
    if !dupes.has_key?(ele)
      dupes[ele] = [idx]
      next
    end
    if dupes.has_key?(ele)
      dupes[ele] << idx
    end
  end
  dupes.each do |k, v|
    if v.length > 1
      final_dupes[k] = v
    end
  end
  return final_dupes
end

def ana_array(arr1, arr2)
  if arr1.length > arr2.length
    arr1.each do |ele|
      if !arr2.include?(ele)
        return false
      end
    end
  else
    arr2.each do |ele|
      if !arr1.include?(ele)
        return false
      end
    end
  end
  return true
end