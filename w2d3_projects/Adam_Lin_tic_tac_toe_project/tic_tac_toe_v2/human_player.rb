require_relative "board.rb"

class HumanPlayer
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def get_position
    p "Player #{@mark} enter a position in the form of two numbers 'x y'"
    pos = gets.chomp.split(" ").map {|num| num.to_i}
    if pos.length != 2
      raise RuntimeError.new "sorry, that was invalid :(((((("
    end
    return pos
  end
end

