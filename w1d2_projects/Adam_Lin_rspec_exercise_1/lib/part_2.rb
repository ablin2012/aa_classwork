def hipsterfy(word)
  i = word.length - 1
  vowels = "aeiouAEIOU"
  letters = word.split("")
  while i >= 0 
    if vowels.include?(letters[i])
      letters[i] = ""
      break
    end
    i -= 1
  end
  return letters.join("")
end

def vowel_counts(str)
  vowels = "aeiou"
  letters = str.split("")
  count = Hash.new(0)
  letters.each do |ele|
    if vowels.include?(ele.downcase)
      count[ele.downcase] += 1
    end
  end
  return count
end

def caesar_cipher(str, n)
  translated = ""
  letters = "abcdefghijklmnopqrstuvwxyz"
  to_idx = {}
  to_letter = {}
  letters.each_char.with_index do |ele, idx|
    to_idx[ele] = idx
    to_letter[idx] = ele
  end
  str_letters = str.split("")
  str_letters.each do |char|
    if letters.include?(char)
      index = (to_idx[char] + n) % 26
    end
    if letters.include?(char)
      translated += to_letter[index]
    else
      translated += char
    end
  end
  return translated
end
