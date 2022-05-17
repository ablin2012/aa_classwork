class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    bucket = key.hash % num_buckets
    if !self.include?(key)
      @store[bucket] << key
      @count += 1
    end
    if @count == num_buckets
      resize!
    end
  end

  def include?(key)
    bucket = key.hash % num_buckets
    @store[bucket].each do |ele|
      return true if ele == key
    end
    return false
  end

  def remove(key)
    bucket = key.hash % num_buckets
    if self.include?(key)
      @store[bucket].delete_at(@store[bucket].index(key))
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_size = num_buckets * 2
    flattened = @store.flatten
    @store = Array.new(new_size) {Array.new}
    flattened.each do |ele|
      self.insert(ele)
      @count -= 1
    end
  end
end
