require_relative "item.rb"
require_relative "list.rb"

class TodoBoard
  def initialize(label)
    @list = List.new(label)
  end

  def get_command
    print "list of commands: mktodo, up, down, swap, sort, priority, print, quit"
    puts
    print "enter a command: "
    command, *args = gets.chomp.split(" ")

    case command
    when "mktodo"
      @list.add_item(*args)
    when "up"
      args.map! {|ele| ele.to_i}
      @list.up(*args)
    when "down"
      args.map! {|ele| ele.to_i}
      @list.down(*args)
    when "swap"
      args.map! {|ele| ele.to_i}
      @list.swap(*args)
    when "sort"
      @list.sort_by_date!
    when "priority"
      @list.print_priority
    when "print"
      if args.length > 0
        args.map! {|ele| ele.to_i}
        @list.print_full_item(*args)
      else
        @list.print
      end
    when "quit"
      return false
    else
      print "Sorry, that command is not recognized"
    end

    true
  end

  def run
    if get_command
      self.run
    end
  end
end

