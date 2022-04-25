def element_count(arr)
  count = Hash.new(0)
  arr.each do |ele|
    count[ele] += 1
  end
  return count
end

def char_replace!(str, hash)
  (0...str.length).each do |i|
    if hash.has_key?(str[i])
      str[i] = hash[str[i]]
    end
  end
  return str
end

def product_inject(arr)
  arr.inject {|prod, num| prod*num}
end
