def reverser(str, &prc)
  p prc.call(str.reverse)
end

def word_changer(str, &prc)
  words = str.split
  new_words = []
  words.each do |word|
    new_words << prc.call(word)
  end
  return new_words.join(" ")
end

def greater_proc_value(num, prc1, prc2)
  if prc1.call(num) > prc2.call(num)
    return prc1.call(num)
  else
    return prc2.call(num)
  end
end

def and_selector(arr, prc1, prc2)
  truths = []
  arr.each do |ele|
    if prc1.call(ele) && prc2.call(ele)
      truths << ele
    end
  end
  return truths
end

def alternating_mapper(arr, prc1, prc2)
  result = []
  arr.each_with_index do |ele, idx|
    if idx % 2 == 0
      result << prc1.call(ele)
    else
      result << prc2.call(ele)
    end
  end
  return result
end