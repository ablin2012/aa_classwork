# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  def span
    if self.length == 0
      return nil
    else
      return self.max - self.min
    end
  end

  def average
    if self.length == 0
      return nil
    else
      return self.sum.to_f/self.length
    end
  end

  def median
    if self.length == 0 
      return nil
    elsif self.length % 2 == 0
      return (self.sort[self.length/2] + self.sort[self.length/2 - 1])/2.0
    else
      return self.sort[self.length/2]
    end
  end

  def counts
    count = Hash.new(0)
    self.each do |ele|
      count[ele] += 1
    end
    return count
  end

  def my_count(el)
    count = 0
    self.each do |ele|
      count += 1 if ele == el
    end
    return count
  end

  def my_index(el)
    self.each_with_index do |ele, idx|
      return idx if ele == el
    end
    return nil
  end

  def my_uniq
    unique = []
    self.each do |ele|
      unique << ele if !unique.include?(ele)
    end
    return unique
  end
  
  def my_transpose
    trans = []
    self.length.times {trans << []}
    self.each do |subs|
      i = 0
      while i < subs.length
        trans[i] << subs[i]
        i += 1
      end
    end
    return trans
  end
end
