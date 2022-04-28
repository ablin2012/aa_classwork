def no_dupes?(arr)
  counter = Hash.new(0)
  result = []
  arr.each {|ele| counter[ele] += 1}
  counter.each do |k,v|
    result << k if v == 1
  end
  return result
end

# p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
# p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
# p no_dupes?([true, true, true])            # => []

def no_consecutive_repeats?(arr)
  arr.each_with_index do |ele1, idx1|
    arr.each_with_index do |ele2, idx2|
      if idx2 > idx1 
        return false if ele1 == ele2
        break
      end
    end
  end
  return true
end

# p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
# p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
# p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
# p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
# p no_consecutive_repeats?(['x'])                              # => true

def char_indices(str)
  index = Hash.new {|h,k| h[k] = Array.new}
  str.each_char.with_index do |char, idx|
    index[char] << idx
  end
  return index
end

# p char_indices('mississippi')   # => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
# p char_indices('classroom')     # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}

def longest_streak(str)
  streaks = []
  new_str = ""
  i = 0
  length = 0
  result = nil
  while i < str.length
    if str[i] == str[i+1]
      new_str += str[i]
    else
      new_str += str[i]
      streaks << new_str
      new_str = ""
    end
    i += 1
  end
  streaks.each do |s|
    if s.length >= length
      length = s.length
      result = s
    end
  end
  return result
end

# p longest_streak('a')           # => 'a'
# p longest_streak('accccbbb')    # => 'cccc'
# p longest_streak('aaaxyyyyyzz') # => 'yyyyy
# p longest_streak('aaabbb')      # => 'bbb'
# p longest_streak('abc')         # => 'c'

def is_prime?(num)
  return false if num < 2
  return true if num == 2
  (2...num).each do |factor|
    return false if num % factor == 0
  end
  return true
end

def bi_prime?(num)
  primes = []
  (0...num).each do |factor|
    primes << factor if is_prime?(factor)
  end
  primes.each do |num1|
    primes.each do |num2|
      return true if num1 * num2 == num
    end
  end
  return false
end

# p bi_prime?(14)   # => true
# p bi_prime?(22)   # => true
# p bi_prime?(25)   # => true
# p bi_prime?(94)   # => true
# p bi_prime?(24)   # => false
# p bi_prime?(64)   # => false

def caesar_cipher(letter, num)
  letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  rotated = letters.rotate(num)
  idx = []
  new_letter = nil
  letter.each_char do |l|
      idx << letters.index(l)
  end
  idx.each do |i|
      new_letter = rotated[i]
  end
  return new_letter
end

def vigenere_cipher(str, arr)
  keys = []
  new_word = []
  while keys.length < str.length
    keys << arr[0]
    arr.rotate!
  end
  str.each_char.with_index do |letter, i|
    new_word << caesar_cipher(letter, keys[i])
  end
  return new_word.join("")
end

# p vigenere_cipher("toerrishuman", [1])        # => "upfssjtivnbo"
# p vigenere_cipher("toerrishuman", [1, 2])     # => "uqftsktjvobp"
# p vigenere_cipher("toerrishuman", [1, 2, 3])  # => "uqhstltjxncq"
# p vigenere_cipher("zebra", [3, 0])            # => "ceerd"
# p vigenere_cipher("yawn", [5, 1])             # => "dbbo"

def vowel_rotate(str)
  vowels = "aeiouAEIOU"
  vowel_arr = []
  new_word = []
  str.each_char do |letter|
    vowel_arr << letter if vowels.include?(letter)
  end
  str.each_char do |letter|
    if vowels.include?(letter)
      new_word << vowel_arr[-1]
      vowel_arr.rotate!
    else
      new_word << letter
    end
  end
  return new_word.join("")
end

# p vowel_rotate('computer')      # => "cempotur"
# p vowel_rotate('oranges')       # => "erongas"
# p vowel_rotate('headphones')    # => "heedphanos"
# p vowel_rotate('bootcamp')      # => "baotcomp"
# p vowel_rotate('awesome')       # => "ewasemo"

# PROC PROBLEMS

class String
  def select(&prc)
    result = ""
    return result if prc == nil
    self.each_char do |char|
      result += char if prc.call(char)
    end
    return result
  end

  def map!(&prc)
    (0...self.length).each do |i|
      self[i] = prc.call(self[i], i)
    end
    return self
  end
end

# p "app academy".select { |ch| !"aeiou".include?(ch) }   # => "pp cdmy"
# p "HELLOworld".select { |ch| ch == ch.upcase }          # => "HELLO"
# p "HELLOworld".select          # => ""

# word_1 = "Lovelace"
# word_1.map! do |ch| 
#     if ch == 'e'
#         '3'
#     elsif ch == 'a'
#         '4'
#     else
#         ch
#     end
# end
# p word_1        # => "Lov3l4c3"

# word_2 = "Dijkstra"
# word_2.map! do |ch, i|
#     if i.even?
#         ch.upcase
#     else
#         ch.downcase
#     end
# end
# p word_2        # => "DiJkStRa"

# RECURSION PROBLEMS 

def multiply(a,b)
  return 0 if a == 0
  if a < 0
    -b + multiply(a+1, b) 
  else 
    b + multiply(a-1, b)
  end
end

# p multiply(3, 5)        # => 15
# p multiply(5, 3)        # => 15
# p multiply(2, 4)        # => 8
# p multiply(0, 10)       # => 0
# p multiply(-3, -6)      # => 18
# p multiply(3, -6)       # => -18
# p multiply(-3, 6)       # => -18

def lucas_sequence(n)
  return [] if n == 0
  return [2] if n == 1
  return [2,1] if n == 2
  lucas_sequence(n-1) << lucas_sequence(n-1)[-2] + lucas_sequence(n-1)[-1]
end

# p lucas_sequence(0)   # => []
# p lucas_sequence(1)   # => [2]    
# p lucas_sequence(2)   # => [2, 1]
# p lucas_sequence(3)   # => [2, 1, 3]
# p lucas_sequence(6)   # => [2, 1, 3, 4, 7, 11]
# p lucas_sequence(8)   # => [2, 1, 3, 4, 7, 11, 18, 29]

def prime_factorization(num)
  arr = []
  return arr if num == 1
  i = num
  while i > 0
    if num % i == 0 && is_prime?(i)
      arr.concat(prime_factorization(num/i))
      arr << i
      break
    end
    i -= 1
  end
  return arr
end

p prime_factorization(12)     # => [2, 2, 3]
p prime_factorization(24)     # => [2, 2, 2, 3]
p prime_factorization(25)     # => [5, 5]
p prime_factorization(60)     # => [2, 2, 3, 5]
p prime_factorization(7)      # => [7]
p prime_factorization(11)     # => [11]
p prime_factorization(2017)   # => [2017]
