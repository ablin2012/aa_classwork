def partition(arr, num)
  result = []
  result << arr.select{ |ele| ele < num}
  result << arr.select{ |ele| ele >= num}
  return result
end

def merge(hash1, hash2)
  new_hash = {}
  hash2.each do |k, v|
    new_hash[k] = v
  end
  hash1.each do |k, v|
    if new_hash.has_key?(k)
      next
    else
      new_hash[k] = v
    end
  end
  return new_hash
end

def censor(str, arr)
  vowels = "aeiouAEIOU"
  new_sent = []
  str.split.each do |word|
    if arr.include?(word.downcase)
      mod = []
      word.each_char do |ele|
        if vowels.include?(ele)
          mod << "*"
        else
          mod << ele
        end
      end
      new_sent << mod.join
    else
      new_sent << word
    end
  end
  return new_sent.join(" ")
end

def power_of_two?(num)
  (0...num).each do |i|
    if 2**i == num
      return true
    end
  end
  return false
end


