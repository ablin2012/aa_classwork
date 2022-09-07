class StackOfPlate{
    constructor(limit){
        this.stacks = {0: []}
        this.limit = limit
        this.current = 0;
    }

    push(item) {
        if (this.currentStack().length < this.limit) {
            this.currentStack().push(item);
        } else {
            this.current += 1;
            this.currentStack().push(item);        
        }
        return this.stacks;
    }

    pop() {
        let popped = this.currentStack().pop();
        if (this.currentStack.length === 0) {
            if (this.current > 0) {
                delete this.currentStack()
                this.current -= 1;
            }
        }
        return popped;
    }

    popAr(idx) {
        return this.stacks[idx].pop();
    }

    currentStack(){
        return this.stacks[this.current]
    }
}