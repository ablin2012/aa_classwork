class Board
  attr_reader :size

  def initialize(n)
    @grid = Array.new(n){Array.new(n, :N)}
    @size = @grid.length**2
  end

  def [](arr)
    return @grid[arr[0]][arr[1]]
  end

  def []=(pos, val)
    @grid[pos[0]][pos[1]] = val
  end

  def num_ships
    count = 0
    @grid.flatten.each do |pos|
      count += 1 if pos == :S
    end
    return count
  end

  def attack(pos)
    if self[pos] == :S
      self[pos] = :H
      p "you sunk my battleship!"
      return true
    else
      self[pos] = :X
      return false
    end
  end

  def place_random_ships
    pos = []
    (0...@grid.length).each {|num| pos << num}
    i = self.size/4
    while i > 0
      x = pos.sample
      y = pos.sample
      if @grid[x][y] != :S
        @grid[x][y] = :S
        i -= 1
      end
    end
  end

  def hidden_ships_grid
    hidden = []
    @grid.each do |row|
      new_row = []
      row.each do |ele|
        if ele == :S
          new_row << :N
        else
          new_row << ele
        end
      end
      hidden << new_row
    end
    return hidden
  end

  def self.print_grid(arr)
    arr.each do |row|
      puts row.join(" ")
    end
  end

  def cheat
    Board.print_grid(@grid)
  end

  def print
    Board.print_grid(self.hidden_ships_grid)
  end
end
