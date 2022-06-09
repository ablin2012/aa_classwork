Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function (callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
       newArr.push(callback(this[i]));
    }
    return newArr;
}

Array.prototype.myReduce = function (callback, initialValue) {
    if (initialValue) {
        this.myEach((el) => {initialValue = callback(initialValue, el)})
    } else {
        initialValue = this.shift();
        this.myEach((el) => {initialValue = callback(initialValue, el)})
    }
    return initialValue
}

// let doubler = (el) => {return el*2};
// console.log([1,2,3,4,5,6].myMap(doubler));

