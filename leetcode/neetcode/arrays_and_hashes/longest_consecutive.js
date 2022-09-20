var longestConsecutive = function(nums) {
    let ans = 0;
    let set = {};
    for (let i = 0; i < nums.length; i++) {
        set[nums[i]] = true;
    }
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i] - 1;
        if (set[curr] === undefined) {
            let count = 0;
            curr += 1;
            while (set[curr]) {
                curr += 1;
                count += 1;
            }
            ans = Math.max(count, ans)
        }
    }
    return ans;
};