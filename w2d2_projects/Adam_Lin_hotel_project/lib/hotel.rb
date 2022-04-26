require_relative "room"

class Hotel
  def initialize(name, rooms)
    @name = name
    @rooms = {}
    rooms.each do |room_name, cap|
      @rooms[room_name] = Room.new(cap)
    end
  end

  def name
    capitalized = []
    @name.split.each do |part|
      capitalized << part.capitalize
    end
    return capitalized.join(" ")
  end

  def rooms
    @rooms
  end

  def room_exists?(str)
    return rooms.has_key?(str)
  end

  def check_in(person, room_name)
    if !room_exists?(room_name)
      p "sorry, room does not exist"
      return
    end
    if @rooms[room_name].add_occupant(person)
      p "check in successful"
    else
      p "sorry, room is full"
    end
  end

  def has_vacancy?
    @rooms.each_value do |instance|
      return true if !instance.full?
    end
    return false
  end

  def list_rooms
    @rooms.each do |room_name, instance|
      puts room_name + instance.available_space.to_s
    end
  end
end
