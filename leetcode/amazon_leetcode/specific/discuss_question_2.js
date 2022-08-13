const leastDifference = function(array) {
    let subs = [[]];
    for (let i = 0; i < array.length; i++) {
        let currLength = subs.length
        for (let j = 0; j < currLength; j++) {
            let newSub = subs[j].concat(array[i]);
            subs.push(newSub);
        }
    }
    subs = subs.filter((sub) => sub.length === 3);
    let ans = null;
    let diff = null;
    for (let i = 0; i < subs.length; i++) {
        if (diff === null || Math.abs(subs[i][1] - subs[i].reduce((a,b) => a+b, 0)/3) < diff){
            diff = Math.abs(subs[i][1] - subs[i].reduce((a,b) => a+b, 0)/3);
            ans = subs[i];
        }
    }
    return ans;
}

console.log(leastDifference([1,4,5,8,9]));

