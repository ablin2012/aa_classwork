def select_even_nums(arr)
  arr.select {|num| num % 2 == 0}
end

def reject_puppies(arr)
  arr.reject {|hash| hash["age"] <= 2}
end

def count_positive_subarrays(arr)
  arr.count {|sub| sub.sum > 0}
end

def aba_translate(str)
  vowels = "aeiou"
  translated = ""
  letters = str.split("")
  letters.each do |ele|
    if vowels.include?(ele)
      translated = translated + ele + "b" + ele
    else
      translated += ele
    end
  end
  return translated
end

def aba_array(arr)
  arr.map {|ele| aba_translate(ele)}
end