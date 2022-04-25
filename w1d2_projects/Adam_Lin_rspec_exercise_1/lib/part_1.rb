def average(num1, num2)
  return (num1 + num2)/2.0
end

def average_array(arr)
  sum = 0
  arr.each {|num| sum += num}
  return sum/arr.length.to_f
end

def repeat(str, num)
  return str * num
end

def yell(str)
  return str.upcase + "!"
end

def alternating_case(str)
  words = []
  str.split(" ").each_with_index do |word, idx|
    if idx % 2 == 0
      words << word.upcase
    else
      words << word.downcase
    end
  end
  return words.join(" ")
end
