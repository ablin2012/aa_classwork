require_relative "passenger.rb"

class Flight
  attr_reader :passengers

  def initialize(flight_number, capacity)
    @flight_number = flight_number
    @capacity = capacity
    @passengers = Array.new
  end

  def full?
    return true if @passengers.length == @capacity
    return false if @passengers.length < @capacity
  end

  def board_passenger(passenger)
    if passenger.has_flight?(@flight_number) && !self.full?
      @passengers << passenger
    end
  end

  def list_passengers
    arr = []
    @passengers.each {|passenger| arr << passenger.name}
    return arr
  end

  def [](idx)
    @passengers[idx]
  end

  def <<(passenger)
    self.board_passenger(passenger)
  end
end

