class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    value = 1
    self.each_with_index do |ele, i|
      value *= ele+i
    end
    return value
  end
end

class String
  def hash
    alpha = "1abcdefghijklmnopqrstuvwxyz"
    value = 1 
    self.each_char.with_index do |char,i|

      value *= alpha.index(char.downcase) + i 
    end
    return value
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    value = 1
    alpha = "0abcdefghijklmnopqrstuvwxyz"    
    self.keys.each do |k|
      value *= alpha.index(k.to_s.downcase) 
    end

    self.values.each do |v|
      if v.is_a?(Integer)
        value *= v 
      else
        value *= alpha.index(v)
      end
    end
    return value
  end
end
