require "employee"

class Startup
  attr_reader :name, :funding, :salaries, :employees # creates getter functions for each of the symbols

  def initialize(name, funding, salaries) # sets up the instance variables for my Startup
    @name = name
    @funding = funding
    @salaries = salaries
    @employees = []
  end

  def valid_title?(title) # tells us whether a title an employee is being hire for exists/has a salary
    return true if @salaries.has_key?(title)
    return false
  end

  def >(other_startup) # tells us if our startup has more funding that another
    return true if self.funding > other_startup.funding
    return false
  end

  def hire(name, title) # raises an error if we try to hire an employee under a title we're not set up for. Adds the employee as an Employee class to our array if the title exists
    unless valid_title?(title)
      raise ArgumentError.new "Not a valid title"
    end
    @employees << Employee.new(name,title)
  end

  def size # tells us how many employees we have
    @employees.length
  end

  def pay_employee(employee) # pays our employees, updating their earnings while decreasing our funding
    if @salaries[employee.title] < @funding
      @funding -= @salaries[employee.title]
      employee.pay(@salaries[employee.title])
    else
      raise ArgumentError.new "Not enough funding"
    end
  end

  def payday # pays all of our employees
    @employees.each do |employee|
      pay_employee(employee)
    end
  end

  def average_salary # gives us the average amount we're paying to our employees
    total = 0
    @employees.each {|employee| total += @salaries[employee.title]}
    return total.to_f/@employees.length
  end

  def close # closes a startup by firing all the employees and setting the funding to 0
    @employees = []
    @funding = 0
  end

  def acquire(other_startup) # takes the funding from the other startup as well as the employees and closes the other startup
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
