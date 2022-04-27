 require_relative "board.rb"
 require_relative "human_player.rb"

 class Game
  def initialize(mark1, mark2)
    @player_1 = HumanPlayer.new(mark1)
    @player_2 = HumanPlayer.new(mark2)
    @board = Board.new
    @current_player = @player_1
  end

  def switch_turn
    if @current_player == @player_1
      @current_player = @player_2 
    elsif @current_player == @player_2
      @current_player = @player_1 
    end
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