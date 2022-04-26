require "employee"

class Startup
  def initialize(name, funding, salaries)
    @name = name
    @funding = funding
    @salaries = salaries
    @employees = []
  end

  def name 
    @name 
  end

  def funding
    @funding
  end

  def salaries
    @salaries
  end

  def employees
    @employees
  end

  def valid_title?(title)
    return true if @salaries.has_key?(title)
    return false
  end

  def >(other_startup)
    return true if self.funding > other_startup.funding
    return false
  end

  def hire(name, title)
    unless valid_title?(title)
      raise ArgumentError.new "Not a valid title"
      return
    end
    @employees << Employee.new(name,title)
  end

  def size
    @employees.length
  end

  def pay_employee(employee)
    if @salaries[employee.title] < @funding
      @funding -= @salaries[employee.title]
      employee.pay(@salaries[employee.title])
    else
      raise ArgumentError.new "Not enough funding"
    end
  end

  def payday
    @employees.each do |employee|
      pay_employee(employee)
    end
  end

  def average_salary
    total = 0
    @employees.each {|employee| total += @salaries[employee.title]}
    return total.to_f/@employees.length
  end

  def close
    @employees = []
    @funding = 0
  end

  def acquire(other_startup)
    @funding += other_startup.funding
    other_startup.salaries.each do |title, salary|
      @salaries[title] = salary if !@salaries.has_key?(title)
    end
    other_startup.employees.each do |employee|
      @employees << employee
    end
    other_startup.close
  end

end
