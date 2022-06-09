Array.prototype.bubbleSort = function(){
    let sorted = false;
    while(sorted === false){
        sorted = true;
        for(let i=0; i < this.length - 1; i ++){
            if(this[i] > this[i + 1]){
                [this[i],this[i+1]] = [this[i+1],this[i]];
                // const a = this[i];
                // const b = this[i+1];
                // this[i] = b;
                // this[i+1] = a;
                sorted = false;
            }
        }
    }
    return this
}

console.log([3,5,1,7,9,8].bubbleSort());

String.prototype.subString = function(){
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i; j < this.length; j++) {
            newArr.push(this.slice(i,j+1))
        }
    }
    return newArr
}

// console.log("hello".subString())