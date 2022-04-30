class Item
  attr_writer :title, :description
  attr_reader :title, :deadline, :description

  def self.valid_date?(date_string)
    parts = date_string.split("-")
    if parts[0].length != 4 || parts[1].length != 2 || parts[1].to_i < 1 || parts[1].to_i > 12 || parts[2].length != 2 || parts[2].to_i < 1 || parts[2].to_i > 31
      return false
    else
      return true
    end
  end

  def initialize(title, deadline, description)
    unless Item.valid_date?(deadline)
      raise ArgumentError.new "invalid deadline"
    end
    @title = title
    @deadline = deadline
    @description = description
  end

  def deadline=(new_deadline)
    unless Item.valid_date?(new_deadline)
      raise ArgumentError.new "invalid deadline"
    end
    @deadline = new_deadline
  end

end

# p Item.valid_date?('2019-10-25') # true
# p Item.valid_date?('1912-06-23') # true
# p Item.valid_date?('2018-13-20') # false
# p Item.valid_date?('2018-12-32') # false
# p Item.valid_date?('10-25-2019') # false