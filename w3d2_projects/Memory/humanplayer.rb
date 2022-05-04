class HumanPlayer
    def initialize
    end
    def prompt(prev)
        if prev
            puts "enter a position in format 'x y'"
        else 
            puts "enter a second position in format 'x y'"
        end
        a = []
        a << gets.chomp.split.map {|ele| ele.to_i}
    end
end