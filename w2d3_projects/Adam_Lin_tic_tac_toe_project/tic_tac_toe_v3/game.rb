 require_relative "board.rb"
 require_relative "human_player.rb"
 require_relative "computer_player.rb"

 class Game
  attr_reader :current_player

  def initialize(n, **marks)
    @players = []
    marks.each do |mark, comp|
      if comp
        @players << ComputerPlayer.new(mark)
      else
        @players << HumanPlayer.new(mark)
      end
    end
    @board = Board.new(n)
    @current_player = @players[0]
  end

  def switch_turn
    @players.rotate!
    @current_player = @players[0]
  end

  def play
    while @board.empty_positions?
      @board.print
      @board.place_mark(@current_player.get_position(@board.legal_positions), @current_player.mark)
      if @board.win?(@current_player.mark)
        @board.print
        return "Player #{@current_player.mark} wins!"
      else
        self.switch_turn
      end
    end
    @board.print
    p "draw, you all suck"
  end

end