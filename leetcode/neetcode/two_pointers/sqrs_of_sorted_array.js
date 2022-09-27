var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let ans = [];
    while(start <= end) {
        if (Math.pow(nums[start],2) > Math.pow(nums[end],2)) {
            ans.push(Math.pow(nums[start],2));
            start += 1;
        } else {
            ans.push(Math.pow(nums[end],2));
            end -= 1;
        };
    };
    return ans.reverse();
};