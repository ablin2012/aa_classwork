def proper_factors(num)
  proper = []
  (1...num).each do |factor|
    proper << factor if num%factor == 0
  end
  return proper
end

def aliquot_sum(num)
  proper = proper_factors(num)
  return proper.sum
end

def perfect_number?(num)
  return true if num == aliquot_sum(num)
  return false
end

def ideal_numbers(n)
  ideal = []
  num = 1
  i = 0
  while i != n
    if perfect_number?(num)
      ideal << num
      i += 1
    end
    num += 1
  end
  return ideal
end

