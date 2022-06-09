Array.prototype.uniq = function() {
    const newArr = [];
    this.forEach((el)=>{
        if (newArr.includes(el)) {
            return;
        }else {
            newArr.push(el);
        }
    }) 
    return newArr;
}

// console.log([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.twosum = function() {
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if (j > i && this[i] + this[j] === 0){
                newArr.push([i,j]);
            }
        }
    }
    return newArr
}

// console.log([-1, -2, -3, 1, 4, 2].twosum());

Array.prototype.transpose = function () {
    const newArr = new Array//(this[0].length)//.fill(new Array);
    for(let p = 0; p < this[0].length; p++){
        newArr.push([]);
    }
    for(let i = 0; i < this.length; i++){
        for(let j=0; j < this[i].length; j++){
            newArr[j].push(this[i][j]);
        }
    }
    return newArr;
}

Array.prototype.transpose2 = function () {
    const newArr=[];
    for (let j = 0; j < this[0].length; j++) {
        let subArr = [];
        for (let i = 0; i < this.length; i++) {subArr.push(this[i][j])}
        newArr.push(subArr);
    }
    return newArr
}

// console.log([[1,2,3],[4,5,6]].transpose());

