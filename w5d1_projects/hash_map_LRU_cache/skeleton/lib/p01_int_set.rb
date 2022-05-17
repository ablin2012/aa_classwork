class MaxIntSet

  attr_reader :max, :store 
  def initialize(max)
    @max = max
    @store = Array.new(max, false)
    # @set = []
  end

  def insert(num)
    raise 'Out of bounds' if num < 0 || num > max 
    if @store[num] == false 
      @store[num] = true 
      # @set << num
    end

  end

  def remove(num)
    if @store[num] == true
      # @set.delete_at(@set.index(num))
      @store[num] = false
    end
  end

  def include?(num)
    return store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :num_buckets, :store
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @num_buckets = num_buckets
    # @set = []
  end

  def insert(num)
    bucket = num % num_buckets
    if !self.include?(num)
      @store[bucket] << num 
      # @set << num
    end
  end

  def remove(num)
    bucket = num % num_buckets 
    if self.include?(num)
      @store[bucket].delete_at(@store[bucket].index(num))
      # @set.delete_at(@set.index(num))
    end
  end

  def include?(num)
    bucket = num % num_buckets
    @store[bucket].each do |ele|
      return true if ele == num 
    end
    return false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count, :num_buckets

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @num_buckets = num_buckets
    @count = 0
  end
  
  def insert(num)
    bucket = num % num_buckets
    if !self.include?(num)
      @store[bucket] << num
      @count += 1
      if count == num_buckets
        resize!
      end
    end
  end

  def remove(num)
    bucket = num % num_buckets
    if @store[bucket].include?(num)
      @store[bucket].delete_at(@store[bucket].index(num))
      @count -= 1
    end
  end

  def include?(num)
    bucket = num % num_buckets
    @store[bucket].each do |ele|
      return true if ele == num 
    end
    return false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    @num_buckets *= 2
    array = @store.flatten
    @store = Array.new(@num_buckets) {Array.new}
    array.each do |ele|
      self.insert(ele)
      @count -= 1
    end
  end
end
