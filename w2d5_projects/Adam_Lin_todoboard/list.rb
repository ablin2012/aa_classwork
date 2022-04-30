require_relative "item.rb"

class List
  attr_accessor :label

  def initialize(label)
    @label = label
    @items = Array.new
  end

  def add_item(title, deadline, description = "")
    if Item.valid_date?(deadline)
      @items << Item.new(title, deadline, description)
      return true
    else
      return false
    end
  end

  def size
    @items.length
  end

  def valid_index?(index)
    return false if index < 0 || index >= @items.length
    return true
  end

  def swap(index_1, index_2)
    if !valid_index?(index_1) || !valid_index?(index_2)
      return false
    else
      @items[index_1], @items[index_2] = @items[index_2], @items[index_1]
      return true
    end
  end

  def [](index)
    if !valid_index?(index)
      return nil
    else
      @items[index]
    end
  end

  def priority
    @items[0]
  end

  def print
    puts "------------------------------------------"
    puts @label.upcase
    puts "------------------------------------------"
    puts "Index".ljust(7) + "Item".ljust(25) + "Deadline".ljust(10)
    puts "------------------------------------------"
    @items.each_with_index do |item, i|
      puts i.to_s.ljust(7) + item.title.ljust(25) + item.deadline.ljust(10)
    end
    puts "------------------------------------------"
    return
  end

  def print_full_item(index)
    puts "------------------------------------------"
    puts @items[index].title.ljust(35) + @items[index].deadline
    puts @items[index].description
    puts "------------------------------------------"
    return
  end

  def print_priority
    self.print_full_item(0)
  end

  def up(index, amount=1)
    return false if index > @items.length - 1
    i = amount
    while i > 0
      self.swap(index, index-1)
      index -= 1
      i -= 1
    end
    return true
  end

  def down(index, amount=1)
    return false if index > @items.length - 1
    i = amount
    while i > 0
      self.swap(index, index+1)
      index += 1
      i -= 1
    end
    return true
  end

  def sort_by_date! 
    @items.sort_by! {|item| item.deadline}
  end
end
