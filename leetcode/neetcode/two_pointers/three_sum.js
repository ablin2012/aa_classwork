var threeSum = function(nums) {
    if (nums.length < 3) return [];
    let ans = [];
    nums = nums.sort(function(a,b){return a-b});
    for(let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while(start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum > 0) {
                end -= 1;
            } else if (sum < 0) {
                start += 1;
            } else {
                ans.push([nums[i], nums[start], nums[end]]);
                start += 1;
                while (nums[start] === nums[start - 1] && start < end) {
                    start += 1;
                }
            }
        } 
    }
    return ans;
};