require_relative "board.rb"

class HumanPlayer
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def get_position(legal_positions)
    p "Player #{@mark} enter a position in the form of two numbers 'x y'"
    pos = gets.chomp.split(" ").map {|num| num.to_i}
    if !legal_positions.include?(pos)
      raise RuntimeError.new "sorry, that was invalid :(((((("
    end
    return pos
  rescue
    p "#{pos} is not a legal position"
    retry
  end
end

