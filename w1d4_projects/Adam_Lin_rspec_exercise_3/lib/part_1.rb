def is_prime?(num)
  return false if num < 2
  return true if num == 0
  (2...num).each do |factor|
    return false if num % factor == 0
  end
  return true
end

def nth_prime(n)
  num = 0
  i = 0
  while i < n
    num += 1
    if is_prime?(num)
      i += 1
    end
  end
  return num
end

def prime_range(min, max)
  primes = []
  (min..max).each do |num|
    primes << num if is_prime?(num)
  end
  return primes
end