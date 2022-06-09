function range(start, end){
    if(start === end){
        return [start];
    } else {
        return range(start, end - 1).concat(end);
    }
}

// console.log(range(1,5));

function sumRec(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        return sumRec(arr.slice(0,arr.length-1)) + arr[arr.length-1]
    }
}

function exponent1(base, exp) {
    if(exp === 0){
        return 1;
    } else {
        return exponent1(base, exp-1) * base;
    }
}

function exponent2(base, exp) {
    if (exp === 0) {
        return 1;
    } else if(exp % 2 === 0) {
        return exponent2(base, exp / 2) ** 2;
    } else {
        return base * exponent2(base, (exp-1)/2) ** 2;
    }
}

function fibonacci(n) {
    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1]
    } else {
        let fib = fibonacci(n-1)
        return fib.concat(fib[fib.length - 1] + fib[fib.length - 2])
    }
}

function deepDup(arr) {
    const newArr = []
    if(arr.length === 0){
        return newArr;
    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].constructor === Array){
                newArr.push(deepDup(arr[i]));
            } else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}

// let arr1 = [[1,2],3];
// console.log(deepDup(arr1));

function bsearch(arr, target) {
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid + 1, arr.length);
    if(arr.length === 0) {
        return -1;
    } else if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return bsearch(left, target);
    } else {
        stack = bsearch(right, target);
        if (stack != -1){
            return stack + mid + 1;
        } else {
            return -1
        }
    }

}

function mergesort(arr){
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor( arr.length / 2 );
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    let sortedleft = mergesort(left);
    let sortedright = mergesort(right);
    let newArr = [];
    while(sortedleft.length > 0 && sortedright.length > 0){
        if(sortedleft[0] < sortedright[0]){
            newArr.push(sortedleft.shift());
        } else {
            newArr.push(sortedright.shift());
        }
    }
    return newArr.concat(sortedleft).concat(sortedright);
}   

console.log(mergesort([2,4,3,1,7,5]));
// console.log(bsearch([1,2,3,4,5,6,7,8], 9));
