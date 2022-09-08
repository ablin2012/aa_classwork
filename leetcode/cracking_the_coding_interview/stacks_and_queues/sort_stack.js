class SortStack{
    constructor(){
        this.stack = [];
        this.tempStack = [];
    }

    pop() {
        let val = this.stack.pop();
        return val;
    }

    push(item) {
        while(item > this.stack[0] && this.stack.length) {
            let popped = this.stack.pop();
            this.tempStack.push(popped);
        }
        this.stack.push(item);
        while (this.tempStack.length) {
            let popped = this.tempStack.pop();
            this.stack.push(popped);
        }
    }
}

