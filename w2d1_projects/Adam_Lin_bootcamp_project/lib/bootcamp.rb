class Bootcamp
  def initialize(name, slogan, student_capacity)
    @name = name
    @slogan = slogan
    @student_capacity = student_capacity
    @teachers = []
    @students = []
    @grades = Hash.new {|h,k| h[k] = Array.new}
  end

  def name
    @name
  end

  def slogan
    @slogan
  end

  def teachers 
    @teachers
  end

  def students
    @students
  end

  def hire(str)
    @teachers << str
  end

  def enroll(str)
    if @students.length < @student_capacity
      @students << str
      return true
    else
      return false
    end
  end

  def enrolled?(str)
    return true if @students.include?(str)
    return false
  end

  def student_to_teacher_ratio
    return @students.length/@teachers.length
  end

  def add_grade(str, num)
    if students.include?(str)
      @grades[str] << num
      return true
    else
      return false
    end
  end

  def num_grades(str)
    if !@students.include?(str)
      return "This student does not exist"
    else
      return @grades[str].length
    end
  end

  def average_grade(str)
    if !@students.include?(str) || @grades[str].length == 0
      return nil
    else
      return @grades[str].sum / @grades[str].length
    end
  end
end
