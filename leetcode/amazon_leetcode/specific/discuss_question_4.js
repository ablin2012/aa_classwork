const vehicleFleet = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 || nums[i]%2 === 1) {
            ans.push(0);
        } else {
            ans.push(Math.floor(nums[i]/4) + 1);
        }
    }
    return ans;
}

console.log(vehicleFleet([4,5,6]))

const optimalPair = function(deviceCapacity, foregroundAppList, backgroundAppList) {
    let ans = [null,null];
    let max = 0;
    for (let i = 0; i < foregroundAppList.length; i++) {
        for (let j = 0; j < backgroundAppList.length; j++) {
            if (foregroundAppList[i][1] + backgroundAppList[j][1] < deviceCapacity && foregroundAppList[i][1] + backgroundAppList[j][1] > max) {
                max = foregroundAppList[i][1] + backgroundAppList[j][1];
                ans = [foregroundAppList[i][0], backgroundAppList[j][0]]
            }
        }
    }
    return ans;
}

let deviceCapacity = 7;
let foregroundAppList = [[1,2], [2,4], [3,6]];
let backgroundAppList = [[1,2]];
console.log(optimalPair(deviceCapacity,foregroundAppList,backgroundAppList));