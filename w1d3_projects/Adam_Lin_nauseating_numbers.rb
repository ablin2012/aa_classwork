# PHASE ONE 

def strange_sums(arr)
  count = 0
  arr.each_with_index do |num1, idx1|
    arr.each_with_index do |num2, idx2|
      if idx2 > idx1
        count += 1 if num1+num2 == 0
      end
    end
  end
  return count
end

# p strange_sums([2, -3, 3, 4, -2])     # 2
# p strange_sums([42, 3, -1, -42])      # 1
# p strange_sums([-5, 5])               # 1
# p strange_sums([19, 6, -3, -20])      # 0
# p strange_sums([9])                   # 0

def pair_product(arr, num)
  arr.each_with_index do |num1, idx1|
    arr.each_with_index do |num2, idx2|
      if idx2 > idx1 && num1 * num2 == num
        return true
      end
    end
  end
  return false
end

# p pair_product([4, 2, 5, 8], 16)    # true
# p pair_product([8, 1, 9, 3], 8)     # true
# p pair_product([3, 4], 12)          # true
# p pair_product([3, 4, 6, 2, 5], 12) # true
# p pair_product([4, 2, 5, 7], 16)    # false
# p pair_product([8, 4, 9, 3], 8)     # false
# p pair_product([3], 12)             # false

def rampant_repeats(str, hash)
  new_word = ""
  str.each_char do |letter|
    if hash.has_key?(letter)
      hash[letter].times { new_word += letter}
    else
      new_word += letter
    end
  end
  return new_word
end

# p rampant_repeats('taco', {'a'=>3, 'c'=>2})             # 'taaacco'
# p rampant_repeats('feverish', {'e'=>2, 'f'=>4, 's'=>3}) # 'ffffeeveerisssh'
# p rampant_repeats('misispi', {'s'=>2, 'p'=>2})          # 'mississppi'
# p rampant_repeats('faarm', {'e'=>3, 'a'=>2})            # 'faaaarm'

def perfect_square(num)
  (1..num).each do |tribs|
    if num/tribs.to_f == tribs
      return true
    end
  end
  return false
end

# p perfect_square(1)     # true
# p perfect_square(4)     # true
# p perfect_square(64)    # true
# p perfect_square(100)   # true
# p perfect_square(169)   # true
# p perfect_square(2)     # false
# p perfect_square(40)    # false
# p perfect_square(32)    # false
# p perfect_square(50)    # false

# PHASE TWO
def anti_prime?(num)
  divisor_count = Hash.new(0)
  (1..num).each do |ele| # iterating through all numbers up until the specified
    (1...ele).each do |factor| # getting all the divisors of each number my issue now is that it's iterating over same numbers multiple times
      divisor_count[ele] += 1 if ele % factor == 0
    end
  end
  values = []
  divisor_count.each_value {|v| values << v}
  if divisor_count[num] == values.max
    return true
  end
  return false
end

# p anti_prime?(24)   # true
# p anti_prime?(36)   # true
# p anti_prime?(48)   # true
# p anti_prime?(360)  # true
# p anti_prime?(1260) # true
# p anti_prime?(27)   # false
# p anti_prime?(5)    # false
# p anti_prime?(100)  # false
# p anti_prime?(136)  # false
# p anti_prime?(1024) # false

def matrix_addition(m1, m2)
  sums = []
  sum_matrix = []
  m1.flatten.each_with_index do |num1, idx1|
    m2.flatten.each_with_index do |num2, idx2|
      sums << num1 + num2 if idx2 == idx1
    end
  end
  m1.each do |subs|
    sum = []
    subs.length.times {sum << sums.shift}
    sum_matrix << sum
  end
  return sum_matrix
end

# matrix_a = [[2,5], [4,7]]
# matrix_b = [[9,1], [3,0]]
# matrix_c = [[-1,0], [0,-1]]
# matrix_d = [[2, -5], [7, 10], [0, 1]]
# matrix_e = [[0 , 0], [12, 4], [6,  3]]

# p matrix_addition(matrix_a, matrix_b) # [[11, 6], [7, 7]]
# p matrix_addition(matrix_a, matrix_c) # [[1, 5], [4, 6]]
# p matrix_addition(matrix_b, matrix_c) # [[8, 1], [3, -1]]
# p matrix_addition(matrix_d, matrix_e) # [[2, -5], [19, 14], [6, 4]]

def mutual_factors(*arr)
  factors = []
  mutual = []
  arr.each do |num|
    (1..num).each do |tribs|
      factors << tribs if num%tribs == 0
      mutual << tribs if factors.count(tribs) == arr.length
    end
  end
  return mutual
end

# p mutual_factors(50, 30)            # [1, 2, 5, 10]
# p mutual_factors(50, 30, 45, 105)   # [1, 5]
# p mutual_factors(8, 4)              # [1, 2, 4]
# p mutual_factors(8, 4, 10)          # [1, 2]
# p mutual_factors(12, 24)            # [1, 2, 3, 4, 6, 12]
# p mutual_factors(12, 24, 64)        # [1, 2, 4]
# p mutual_factors(22, 44)            # [1, 2, 11, 22]
# p mutual_factors(22, 44, 11)        # [1, 11]
# p mutual_factors(7)                 # [1, 7]
# p mutual_factors(7, 9)              # [1]

def tribonacci_number(n)
  tribs = [1, 1, 2]
  n.times {tribs << tribs[-1] + tribs[-2] + tribs[-3]}
  return tribs[n-1]
end

# p tribonacci_number(1)  # 1
# p tribonacci_number(2)  # 1
# p tribonacci_number(3)  # 2
# p tribonacci_number(4)  # 4
# p tribonacci_number(5)  # 7
# p tribonacci_number(6)  # 13
# p tribonacci_number(7)  # 24
# p tribonacci_number(11) # 274

# PHASE 3

# Want to check that all the matrices are the same length or return nil
# Want to conduct the same code as before, but for the number of matrice inputed arr.length
# I've stored all the sums in sums and now need to divide them into their respective sub matrices

def matrix_addition_reloaded(*arr)
  sums = []
  lengths = []
  sum_matrix = []
  arr.each do |matrix|
    lengths << matrix.flatten.length
  end
  return nil if lengths.max != lengths.min
  lengths[0].times {sums << 0}
  arr.each do |matrix|
     matrix.flatten.each_with_index do |num, idx|
      sums[idx] += num
    end
  end
  arr[0].each do |subs|
    sub_matrix = []
    subs.length.times {sub_matrix << sums.shift}
    sum_matrix << sub_matrix
  end
  return sum_matrix
end

# matrix_a = [[2,5], [4,7]]
# matrix_b = [[9,1], [3,0]]
# matrix_c = [[-1,0], [0,-1]]
# matrix_d = [[2, -5], [7, 10], [0, 1]]
# matrix_e = [[0 , 0], [12, 4], [6,  3]]

# p matrix_addition_reloaded(matrix_a, matrix_b)              # [[11, 6], [7, 7]]
# p matrix_addition_reloaded(matrix_a, matrix_b, matrix_c)    # [[10, 6], [7, 6]]
# p matrix_addition_reloaded(matrix_e)                        # [[0, 0], [12, 4], [6, 3]]
# p matrix_addition_reloaded(matrix_d, matrix_e)              # [[2, -5], [19, 14], [6, 4]]
# p matrix_addition_reloaded(matrix_a, matrix_b, matrix_e)    # nil
# p matrix_addition_reloaded(matrix_d, matrix_e, matrix_c)    # nil

# We want to take each sub array and compare the values in each index and if they're the same return true
# I can make each column into a subarray and then see if any of the subarrays all contain the same value to return true
def squarocol?(arr)
  columns = []
  arr.each do |row|
    return true if row.max == row.min
  end
  arr.length.times {columns << []}
  arr.each do |subs|
    (0...subs.length).each do |i|
      columns[i] << subs[i]
    end
  end
  columns.each do |col|
    return true if col.max == col.min
  end
  return false
end

# p squarocol?([
#     [:a, :x , :d],
#     [:b, :x , :e],
#     [:c, :x , :f],
# ]) # true

# p squarocol?([
#     [:x, :y, :x],
#     [:x, :z, :x],
#     [:o, :o, :o],
# ]) # true

# p squarocol?([
#     [:o, :x , :o],
#     [:x, :o , :x],
#     [:o, :x , :o],
# ]) # false

# p squarocol?([
#     [1, 2, 2, 7],
#     [1, 6, 6, 7],
#     [0, 5, 2, 7],
#     [4, 2, 9, 7],
# ]) # true

# p squarocol?([
#     [1, 2, 2, 7],
#     [1, 6, 6, 0],
#     [0, 5, 2, 7],
#     [4, 2, 9, 7],
# ]) # false

# I can do something similar to what I did for the columns of the last problem and columns diagonals into sub arrays
def squaragonal?(arr)
  diags = [[], []]
  arr.each_with_index do |array, idx|
    diags[0] << array[idx]
    diags[1] << array[-1-idx]
  end
  diags.each do |subs|
    return true if subs.max == subs.min
  end
  return false
end

# p squaragonal?([
#     [:x, :y, :o],
#     [:x, :x, :x],
#     [:o, :o, :x],
# ]) # true

# p squaragonal?([
#     [:x, :y, :o],
#     [:x, :o, :x],
#     [:o, :o, :x],
# ]) # true

# p squaragonal?([
#     [1, 2, 2, 7],
#     [1, 1, 6, 7],
#     [0, 5, 1, 7],
#     [4, 2, 9, 1],
# ]) # true

# p squaragonal?([
#     [1, 2, 2, 5],
#     [1, 6, 5, 0],
#     [0, 2, 2, 7],
#     [5, 2, 9, 7],
# ]) # false

# row[0] and row[-1] will always be 1
def pascals_triangle(n)
  p_tri = []
  i = 1
  n.times
  row
end

# p pascals_triangle(5)
# # [
# #     [1],
# #     [1, 1],
# #     [1, 2, 1],
# #     [1, 3, 3, 1],
# #     [1, 4, 6, 4, 1]
# # ]

# p pascals_triangle(7)
# # [
# #     [1],
# #     [1, 1],
# #     [1, 2, 1],
# #     [1, 3, 3, 1],
# #     [1, 4, 6, 4, 1],
# #     [1, 5, 10, 10, 5, 1],
# #     [1, 6, 15, 20, 15, 6, 1]
# # ]


def mersenne_prime(n)
  i = 1
  primes = []
  while n > 0
    while i > 0
      i += 1
      if is_prime?(2**i - 1)
        primes << (2**i -1)
        break
      end
    end
    n-=1
  end
  return primes[-1]
end

def is_prime?(num)
  return false if num < 2
  return true if num == 2
  (2...num).each do |factor|
    return false if num%factor == 0
  end
  return true
end

# p mersenne_prime(1) # 3
# p mersenne_prime(2) # 7
# p mersenne_prime(3) # 31
# p mersenne_prime(4) # 127
# p mersenne_prime(6) # 131071

# we can take the number value of our string and see if it result in a whole number 
def triangular_word?(str)
  letter_values = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
  sum = 0
  str.each_char do |letter|
    sum += letter_values[letter.to_sym]
  end
  i =  -(1-(1+8*sum)**0.5)/2.0
  if i == i.to_i
    return true
  else
    return false
  end
end

# p triangular_word?('abc')       # true
# p triangular_word?('ba')        # true
# p triangular_word?('lovely')    # true
# p triangular_word?('question')  # true
# p triangular_word?('aa')        # false
# p triangular_word?('cd')        # false
# p triangular_word?('cat')       # false
# p triangular_word?('sink')      # false

def consecutive_collapse(arr)
  collapsed = []
  removed = []
  while arr.length > 1
    (0...arr.length).each do |i|
    if arr[i] != arr[1] + 1 && arr[0] != arr[1] - 1
      collapsed << arr.shift
    else
      2.times {removed << arr.shift}
    end
  end
  collapsed << arr.shift
  return collapsed
end

p consecutive_collapse([3, 4, 1])                     # [1]
p consecutive_collapse([1, 4, 3, 7])                  # [1, 7]
p consecutive_collapse([9, 8, 2])                     # [2]
p consecutive_collapse([9, 8, 4, 5, 6])               # [6]
p consecutive_collapse([1, 9, 8, 6, 4, 5, 7, 9, 2])   # [1, 9, 2]
p consecutive_collapse([3, 5, 6, 2, 1])               # [1]
p consecutive_collapse([5, 7, 9, 9])                  # [5, 7, 9, 9]
p consecutive_collapse([13, 11, 12, 12])              # []

def pretentious_primes(arr, n)
  new_nums = []
  saved = n
  arr.each do |ele|
    n = saved
    i = 1
    while n != 0
      if n > 0
        if i > 1000
          new_nums << nil
          break
        end
        if is_prime?(ele+i)
          n -= 1
          new_nums << ele + i if n == 0 
        end
        i += 1
      elsif n < 0
        if i > 1000
          new_nums << nil
          break
        end
        if is_prime?(ele-i)
          n += 1
          new_nums << ele - i if n == 0
        end
        i += 1
      end
    end
  end
  return new_nums
end

# p pretentious_primes([4, 15, 7], 1)           # [5, 17, 11]
# p pretentious_primes([4, 15, 7], 2)           # [7, 19, 13]
# p pretentious_primes([12, 11, 14, 15, 7], 1)  # [13, 13, 17, 17, 11]
# p pretentious_primes([12, 11, 14, 15, 7], 3)  # [19, 19, 23, 23, 17]
# p pretentious_primes([4, 15, 7], -1)          # [3, 13, 5]
# p pretentious_primes([4, 15, 7], -2)          # [2, 11, 3]
# p pretentious_primes([2, 11, 21], -1)         # [nil, 7, 19]
# p pretentious_primes([32, 5, 11], -3)         # [23, nil, 3]
# p pretentious_primes([32, 5, 11], -4)         # [19, nil, 2]
# p pretentious_primes([32, 5, 11], -5)         # [17, nil, nil]
