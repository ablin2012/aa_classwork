require_relative "board.rb"

class ComputerPlayer
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def get_position(legal_positions)
    pos = legal_positions.sample
    p "Computer #{self.mark} chose position #{pos}"
    return pos
  end
end