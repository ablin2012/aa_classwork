function getMinimumOperations(arr) {
    // Write your code here
    let sorted = false;
    let operations = 0;
    let stopped = 0;
    while (!sorted) {
        let newArr = [];
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                sorted = false;
                operations += 1;
                newArr.push(Math.floor(arr[i]/2));
                newArr.push(arr[i] - Math.floor(arr[i]/2));
                stopped = i + 1;
                break
            } else {
                newArr.push(arr[i]);
            }
        }
        for (let i = stopped; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        stopped = 0;
        arr = newArr;
    }
    console.log(arr);
    return operations;
}