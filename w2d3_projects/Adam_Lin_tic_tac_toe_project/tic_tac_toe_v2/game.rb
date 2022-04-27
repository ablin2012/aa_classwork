 require_relative "board.rb"
 require_relative "human_player.rb"

 class Game
  def initialize(n, *marks)
    @players = []
    marks.each do |mark|
      @players << HumanPlayer.new(mark)
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
      @board.place_mark(@current_player.get_position, @current_player.mark)
      if @board.win?(@current_player.mark)
        p "Player #{@current_player.mark} wins!"
        return
      else
        self.switch_turn
      end
    end
    p "draw, you both suck"
  end

end