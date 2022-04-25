# PHASE 1: Modest Problems

def duos(str)
  count = 0
  str.each_char.with_index do |ele1, idx1|
    str.each_char.with_index do |ele2, idx2|
      if idx2 > idx1
        count += 1 if ele1 == ele2
        break
      end
    end
  end
  return count
end

# p duos('bootcamp')      # 1
# p duos('wxxyzz')        # 2
# p duos('hoooraay')      # 3
# p duos('dinosaurs')     # 0
# p duos('e')             # 0

def sentence_swap(str, hash)
  new_sent = []
  str.split.each do |word|
    if hash.has_key?(word)
      new_sent << hash[word]
    else
      new_sent << word
    end
  end
  return new_sent.join(" ")
end

# p sentence_swap('anything you can do I can do',
#   'anything'=>'nothing', 'do'=>'drink', 'can'=>'shall'
# ) # 'nothing you shall drink I shall drink'

# p sentence_swap('what a sad ad',
#   'cat'=>'dog', 'sad'=>'happy', 'what'=>'make'
# ) # 'make a happy ad'

# p sentence_swap('keep coding okay',
#   'coding'=>'running', 'kay'=>'pen'
# ) # 'keep running okay'

def counted_characters(str)
  new_str = []
  counter = Hash.new(0)
  str.each_char do |letter|
    counter[letter] += 1
  end
  counter.each do |k, v|
    new_str << k if v > 2
  end
  return new_str
end

# p counted_characters("that's alright folks") # ["t"]
# p counted_characters("mississippi") # ["i", "s"]
# p counted_characters("hot potato soup please") # ["o", "t", " ", "p"]
# p counted_characters("runtime") # []

def triplet_true(str)
  counter = Hash.new(0)
  str.each_char do |letter|
    counter[letter] += 1
  end
  counter.each_value do |v|
    return true if v >= 3
  end
  return false
end

# p triplet_true('caaabb')        # true
# p triplet_true('terrrrrible')   # true
# p triplet_true('runninggg')     # true
# p triplet_true('bootcamp')      # false
# p triplet_true('e')             # false

def energetic_encoding(str, hash)
  new_words = []
  str.split.each do |word|
    word.each_char.with_index do |letter, idx|
      if hash.has_key?(letter)
        word[idx] = hash[letter]
      else
        word[idx] = "?"
      end
    end
    new_words << word
  end
  return new_words.join(" ")
end

# p energetic_encoding('sent sea',
#     'e'=>'i', 's'=>'z', 'n'=>'m', 't'=>'p', 'a'=>'u'
# ) # 'zimp ziu'

# p energetic_encoding('cat',
#     'a'=>'o', 'c'=>'k'
# ) # 'ko?'

# p energetic_encoding('hello world',
#     'o'=>'i', 'l'=>'r', 'e'=>'a'
# ) # '?arri ?i?r?'

# p energetic_encoding('bike', {}) # '????'
def uncompress(str)
  new_string = ""
  i = 0
  while i < str.length
    num = str[i+1].to_i
    num.times {new_string += str[i]}
    i += 2
  end
  return new_string
end

# p uncompress('a2b4c1') # 'aabbbbc'
# p uncompress('b1o2t1') # 'boot'
# p uncompress('x3y1x2z4') # 'xxxyxxzzzz'

# PHASE 2: More difficult, maybe?

def conjunct_select(arr, *prcs)
  counter = Hash.new(0)
  new_arr = []
  arr.each do |ele|
    prcs.each do |prc|
      counter[ele] += 1 if prc.call(ele)
    end
  end
  counter.each do |k,v|
    new_arr << k if v == prcs.length
  end
  return new_arr
end

# is_positive = Proc.new { |n| n > 0 }
# is_odd = Proc.new { |n| n.odd? }
# less_than_ten = Proc.new { |n| n < 10 }

# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive) # [4, 8, 11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd) # [11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd, less_than_ten) # [7]

def convert_pig_latin(str)
  new_words = []
  vowels = "aeiouAEIOU"
  capitalized = []
  str.split.each_with_index do |word, idx|
    capitalized << idx if word == word.capitalize
    if word.length < 3 
      new_words << word
    else
      new_word = ""
      if vowels.include?(word[0])
        new_word += word + "yay"
        new_words << new_word
      else
        word.each_char.with_index do |letter, idx|
          if vowels.include?(letter)
            new_word += word[idx..-1] + word[0...idx] + "ay"
            break
          end
        end
        new_words << new_word
      end
    end
  end
  capitalized.each {|i| new_words[i] = new_words[i].downcase.capitalize}
  return new_words.join(" ")   
end

# p convert_pig_latin('We like to eat bananas') # "We ikelay to eatyay ananasbay"
# p convert_pig_latin('I cannot find the trash') # "I annotcay indfay ethay ashtray"
# p convert_pig_latin('What an interesting problem') # "Atwhay an interestingyay oblempray"
# p convert_pig_latin('Her family flew to France') # "Erhay amilyfay ewflay to Ancefray"
# p convert_pig_latin('Our family flew to France') # "Ouryay amilyfay ewflay to Ancefray"

def reverberate(str)
  new_words = []
  vowels = "aeiouAEIOU"
  capitalized = []
  str.split.each_with_index do |word, idx|
    new_word = ""
    capitalized << idx if word == word.capitalize
    if word.length < 3 
      new_words << word
    else
      if vowels.include?(word[-1])
        new_words << word + word
      else
        word.each_char.with_index do |letter, idx|
          if vowels.include?(letter)
            new_word = word + word[idx..-1]
          end
        end
        new_words << new_word
      end
    end
  end
  capitalized.each {|i| new_words[i] = new_words[i].downcase.capitalize}
  return new_words.join(" ")   
end

# p reverberate('We like to go running fast') # "We likelike to go runninging fastast"
# p reverberate('He cannot find the trash') # "He cannotot findind thethe trashash"
# p reverberate('Pasta is my favorite dish') # "Pastapasta is my favoritefavorite dishish"
# p reverberate('Her family flew to France') # "Herer familyily flewew to Francefrance"

def disjunct_select(arr, *prcs)
  new_arr = []
  arr.each do |ele|
    prcs.each do |prc|
      if new_arr.include?(ele)
        next
      elsif prc.call(ele)
        new_arr << ele
      end
    end
  end
  return new_arr
end

# longer_four = Proc.new { |s| s.length > 4 }
# contains_o = Proc.new { |s| s.include?('o') }
# starts_a = Proc.new { |s| s[0] == 'a' }

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
# ) # ["apple", "teeming"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o
# ) # ["dog", "apple", "teeming", "boot"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o,
#     starts_a
# ) # ["ace", "dog", "apple", "teeming", "boot"]

def alternating_vowel(str)
  new_words = []
  vowels = "aeiouAEIOU"
  str.split.each_with_index do |word, idx|
    if idx % 2 == 0
      word.each_char.with_index do |letter, i|
        if vowels.include?(letter)
          word[i] = ""
          break
        end
      end
      new_words << word
    else
      new_word = ""
      word.each_char.with_index do |letter, i|
        if vowels.include?(letter)
          new_word = word[0...i] + word[i+1..-1]
        end
      end
      new_words << new_word
    end
  end
  return new_words.join(" ")
end

# p alternating_vowel('panthers are great animals') # "pnthers ar grat animls"
# p alternating_vowel('running panthers are epic') # "rnning panthrs re epc"
# p alternating_vowel('code properly please') # "cde proprly plase"
# p alternating_vowel('my forecast predicts rain today') # "my forecst prdicts ran tday"

def silly_talk(str)
  vowels = "aeiouAEIOU"
  new_words = []
  str.split.each do |word|
    if vowels.include?(word[-1])
      new_words << word + word[-1]
    else
      new_word = ""
      word.each_char do |letter|
        if vowels.include?(letter)
          new_word += letter + "b" + letter.downcase
        else
          new_word += letter
        end
      end
      new_words << new_word
    end
  end
  return new_words.join(" ")
end

# p silly_talk('Kids like cats and dogs') # "Kibids likee cabats aband dobogs"
# p silly_talk('Stop that scooter') # "Stobop thabat scobooboteber"
# p silly_talk('They can code') # "Thebey caban codee"
# p silly_talk('He flew to Italy') # "Hee flebew too Ibitabaly"

# We want to iterate through each letter in the string
# If letters are the same and consecutive, the count will increase
# We want a result string of a letter followed by the number of times it appears consecutively in the original string
# If there is only one, then we want to just have the letter

def compress(str)
  i = 0
  counter = 1
  letters = []
  while i < str.length
    if str[i] == str[i+1]
      counter += 1
    else
      if counter == 1
        letters << str[i]
      else
        letters << str[i] 
        letters << counter.to_s
      end
      counter = 1
    end
    i += 1
  end
  return letters.join("")
end

p compress('aabbbbc')   # "a2b4c"
p compress('boot')      # "bo2t"
p compress('xxxyxxzzzz')# "x3yx2z4"