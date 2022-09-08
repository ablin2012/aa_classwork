class StackQueue{
    constructor(){
        this.enqueue = [];
        this.dequeue = [];
    }

    push(item) {
        this.enqueue.push(item);
    }

    pop() {
        if (this.dequeue.length) {
            let val = this.dequeue.pop();
            return val;
        } else {
            while (this.enqueue.length) {
                let popped = this.enqueue.pop();
                this.dequeue.push(popped);
            }
            let val = this.dequeue.pop();
            return val;
        }
    }

    peek() {
        if (this.dequeue.length) {
            return this.dequeue[0];
        } else {
            while (this.enqueue.length) {
                let popped = this.enqueue.pop();
                this.dequeue.push(popped);
            }
            return this.dequeue[0];
        }
    }
}