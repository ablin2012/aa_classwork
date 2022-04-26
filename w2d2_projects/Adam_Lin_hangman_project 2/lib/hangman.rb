class Hangman
  DICTIONARY = ["cat", "dog", "bootcamp", "pizza"]

  def self.random_word
    return DICTIONARY.sample
  end

  def initialize
    @secret_word = Hangman.random_word
    @guess_word = Array.new(@secret_word.length, "_")
    @attempted_chars = []
    @remaining_incorrect_guesses = 5
  end

  def guess_word
    @guess_word
  end

  def attempted_chars
    @attempted_chars
  end

  def remaining_incorrect_guesses
    @remaining_incorrect_guesses
  end

  def already_attempted?(char)
    return true if @attempted_chars.include?(char)
    return false
  end

  def get_matching_indices(char)
    idxs = []
    @secret_word.each_char.with_index do |letter, idx|
      idxs << idx if letter == char
    end
    return idxs
  end

  def fill_indices(char, arr)
    arr.each {|idx| @guess_word[idx] = char}
  end

  def try_guess(char)
    if already_attempted?(char)
      p "that has already been attempted"
      return false
    else
      @attempted_chars << char
      @remaining_incorrect_guesses -= 1 if get_matching_indices(char).length == 0
      fill_indices(char, get_matching_indices(char))
      return true
    end
  end

  def ask_user_for_guess
    p "Enter a char:"
    guess = gets.chomp
    return try_guess(guess)
  end

  def win?
    if @guess_word.join("") == @secret_word
      p "WIN" 
      return true
    else
      return false
    end
  end

  def lose?
    if @remaining_incorrect_guesses == 0
      p "LOSE"
      return true
    else
      return false
    end
  end

  def game_over?
    if self.win? || self.lose?
      p @secret_word 
      return true
    else
      return false
    end
  end



end
