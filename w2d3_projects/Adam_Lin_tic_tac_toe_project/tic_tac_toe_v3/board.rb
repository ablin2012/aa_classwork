class Board
  def initialize(n)
    @board = Array.new(n) {Array.new(n,"_")}
  end

  def valid?(pos)
    pos.each do |ele|
      return false if ele < 0 || ele > @board.length - 1
    end
    return true
  end

  def empty?(pos)
    return true if @board[pos[0]][pos[1]] == "_"
    return false
  end

  def place_mark(pos, mark)
    unless valid?(pos) && empty?(pos)
      raise RuntimeError.new "invalid mark"
    else
      @board[pos[0]][pos[1]] = mark
    end
  end

  def print
    @board.each do |row|
      puts row.join(" ")
    end
  end

  def win_row?(mark)
    win = false
    @board.each do |row|
      i = 0
      while i < row.length
        if row[i] == mark
          win = true
        else
          win = false
          break
        end
        i += 1
      end
      if win
        return win
      end
    end
    return win
  end

  def win_col?(mark)
    win = false
    column = Array.new(@board.length) {Array.new}
    @board.each do |row|
      i = 0
      while i < row.length
        column[i] << row[i]
        i += 1
      end
    end
    column.each do |col|
      i = 0
      while i < col.length
        if col[i] == mark
          win = true
        else
          win = false
          break
        end
        i += 1
      end
      if win
        return win
      end
    end
    return win
  end

  def win_diagonal?(mark)
    win = false
    diagonals = Array.new(2) {Array.new}
    i = 0
    e = -1
    while i < @board.length
      diagonals[0] << @board[i][i]
      diagonals[1] << @board[i][e]
      i += 1
      e -= 1
    end
    diagonals.each do |diag|
      i = 0
      while i < diag.length
        if diag[i] == mark
          win = true
        else
          win = false
          break
        end
        i += 1
      end
      if win
        return win
      end
    end
    return win
  end

  def win?(mark)
    return true if win_row?(mark) || win_col?(mark) || win_diagonal?(mark)
    return false
  end

  def empty_positions?
    @board.each do |row|
      row.each do |position|
        return true if position == "_"
      end
    end
    return false
  end

  def legal_positions
    legal = []
    @board.each_with_index do |row, idx1|
      row.each_with_index do |pos, idx2|
        legal << [idx1, idx2] if pos == "_"
      end
    end
    return legal
  end
end