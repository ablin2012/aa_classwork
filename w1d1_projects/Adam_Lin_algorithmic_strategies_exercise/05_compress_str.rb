# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".

def compress_str(str)
  counter = 1
  streaks = ""
  (0...str.length).each do |idx| # aaabbc
    if str[idx+1] == nil && counter == 1
      streaks = streaks + str[idx]
      return streaks
    elsif str[idx+1] == nil && counter != 1
      streaks = streaks + counter.to_s + str[idx]
      return streaks
    end
    if str[idx] == str[idx+1] # a,a a,a a,b b,b b,c 
      counter += 1 # 1->2->3->1->2->1
    else
      if counter > 1
        streaks = streaks + counter.to_s + str[idx]
      else
        streaks = streaks + str[idx]
      end
      counter = 1
    end
  end
end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
