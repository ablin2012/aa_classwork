def all_words_capitalized?(arr)
  arr.all? {|word| word[0] == word[0].upcase && word[1..-1] == word[1..-1].downcase}
end

def no_valid_url?(arr)
  urls = ["com", "net", "io", "org"]

  arr.none? {|ele| urls.include?(ele.split(".")[-1])}
end

def any_passing_students?(arr)
  arr.any? do |student|
    sum = 0
    student[:grades].each {|score| sum += score}
    sum/student[:grades].length.to_f >= 75
  end
end