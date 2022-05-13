class TowerOfHanoi

    attr_reader :stack_1, :stack_2, :stack_3, :disk_count
    def initialize(disk_count = 3)
        @disk_count = disk_count
        raise ArgumentError.new "too little disk" unless disk_count > 2

        @stack_1 = []
        @stack_2 = []
        @stack_3 = []
        (0...disk_count).each do |i|
            @stack_1 << i
        end
    end

    def move(start, finish)
        case start
        when 1
            store = stack_1.shift
        when 2
            store = stack_2.shift
        when 3
            store = stack_3.shift
        end

        case finish
        when 1
            stack_1.unshift(store)
        when 2
            stack_2.unshift(store)
        when 3
            stack_3.unshift(store)
        end
        raise "must move disk to another stack" if start == finish
    end

    def won?
        stack_3.length == disk_count
    end
end