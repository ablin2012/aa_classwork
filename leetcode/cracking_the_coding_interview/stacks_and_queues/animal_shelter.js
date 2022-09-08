class AnimalShelter{
    constructor() {
        this.newestQueue = [];
        this.oldestQueue = [];
    }

    enqueue(animal) {
        this.newestQueue.unshift(animal);
    }

    dequeueAny(){
        if (this.oldestQueue.length) {
            let pet = this.oldestQueue.pop();
            return pet;
        } else {
            let pet = this.newestQueue.pop();
            return pet;
        }
    }

    dequeueDog() {
        if (this.oldestQueue.length) {
            if (this.oldestQueue[this.oldestQueue.length - 1] === 'dog') {
                let pet = this.oldestQueue.pop();
                return pet;
            }
        } else {
            while(this.newestQueue.length) {
                let pet = this.newestQueue.pop();
                if (pet === 'dog') {
                    return pet;
                } else {
                    this.oldestQueue.unshift(pet);
                }
            }
            return 'no dogs available'
        }
    }

    dequeueCat() {
        if (this.oldestQueue.length) {
            if (this.oldestQueue[this.oldestQueue.length - 1] === 'cat') {
                let pet = this.oldestQueue.pop();
                return pet;
            }
        } else {
            while(this.newestQueue.length) {
                let pet = this.newestQueue.pop();
                if (pet === 'cat') {
                    return pet;
                } else {
                    this.oldestQueue.unshift(pet);
                }
            }
            return 'no cats available'
        }
    }
}