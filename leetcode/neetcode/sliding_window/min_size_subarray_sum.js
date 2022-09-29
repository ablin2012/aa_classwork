var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 0;
    let length = 1;
    let ans = nums.length;
    let sum = nums[0];
    let valid = false;
    while (end <= nums.length) {
        if (sum >= target) {
            valid = true;
            ans = Math.min(length, ans);
            sum -= nums[start];
            start += 1;
            length -= 1;
        } else {
            end += 1;
            sum += nums[end];
            length += 1;
        }
    };
    if (valid) return ans;
    return 0;
};

var minSubArrayLen = function(target, nums) {
    let start = 0;
    let minLen = nums.length + 1
    let sum = 0;
    for(let i = 0 ; i < nums.length; i ++){
        sum = sum + nums[i]
        while(sum >= target){
            minLen = Math.min(minLen, (i - start) +1)
            sum = sum - nums[start]
            start ++
        }
    }
    return minLen === nums.length + 1 ? 0 : minLen
};
