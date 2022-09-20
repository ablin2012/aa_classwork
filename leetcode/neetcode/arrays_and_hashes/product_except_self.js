var productExceptSelf = function(nums) {
    let ans = new Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        ans[i] *= prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let i = 0; i < nums.length; i++) {
        ans[nums.length - 1 - i] *= postfix;
        postfix *= nums[nums.length - 1 - i];
    }
    return ans;
};