def zip(*arr)
  new_arr = []
  arr[0].length.times {new_arr << []}
  arr.each do |array|
    i = 0
    while i < arr[0].length
      new_arr[i] << array[i]
      i += 1
    end
  end
  return new_arr
end

def prizz_proc(arr, prc1, prc2)
  new_arr = []
  arr.each do |ele|
    new_arr << ele if (prc1.call(ele) || prc2.call(ele)) && !(prc1.call(ele) && prc2.call(ele))
  end
  return new_arr
end

def zany_zip(*arr)
  new_arr = []
  lengths = []
  arr.each {|subs| lengths << subs.length}
  lengths.max.times {new_arr << []}
  arr.each do |array|
    i = 0
    while i < lengths.max
      if array[i] == nil
        new_arr[i] << nil
      else
        new_arr[i] << array[i]
      end
      i += 1
    end
  end
  return new_arr
end

def maximum(arr, &prc)
  result = nil
  return result if arr.length == 0
  size = 0
  arr.each do |ele|
    if prc.call(ele) >= size 
      size = prc.call(ele)
      result = ele
    end
  end
  return result
end

def my_group_by(arr, &prc)
  hash = {}
  arr.each {|ele| hash[prc.call(ele)] = []}
  arr.each do |ele|
    hash[prc.call(ele)] << ele if hash.has_key?(prc.call(ele))
  end
  return hash
end

def max_tie_breaker(arr, prc1, &prc2)
  return nil if arr.length == 0
  result = arr[0]
  size = 0
  arr.each do |ele|
    if prc2.call(ele) > size
      size = prc2.call(ele)
      result = ele
    elsif prc2.call(ele) == size
      result = ele if prc1.call(ele) > prc1.call(result)
    end
  end
  return result
end

def silly_syllables(str)
  vowels = "aeiouAEIOU"
  words = str.split
  new_words = []
  words.each do |word|
    count = 0
    word.each_char do |letter|
      count += 1 if vowels.include?(letter)
    end
    if count < 2
      new_words << word 
    else
      f_l = first_last(word)
      new_words << word[f_l[0]..f_l[1]]
    end
  end
  return new_words.join(" ")
end

def first_last(word)
  vowels = "aeiouAEIOU"
  f_l = []
  word.each_char.with_index do |letter, idx|
    if vowels.include?(letter)
      f_l << idx
      break
    end
  end
  i = -1
  while i < 0
    if vowels.include?(word[i])
      f_l << i
      break
    end
    i -= 1
  end
  return f_l
end

