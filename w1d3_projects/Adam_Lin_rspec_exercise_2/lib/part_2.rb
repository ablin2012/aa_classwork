
require "byebug"
def palindrome?(str)
  letters = str.split("")
  reverse = []
  str.length.times {reverse << letters.pop}
  if reverse.join == str
    return true
  else
    return false
  end
end

def substrings(str)
  subs = []
  i = 0
  while i < str.length
    e = 0
    while i+e < str.length
      subs << str[i..i+e]
      e += 1
    end
    i +=1
  end
  return subs
end

def palindrome_substrings(str)
  result = []
  substrings(str).each do |word|
    if palindrome?(word) && word.length > 1
      result << word
    end
  end
  return result
end