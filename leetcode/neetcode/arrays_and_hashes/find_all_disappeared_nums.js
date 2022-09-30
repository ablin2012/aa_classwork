var findDisappearedNumbers = function(nums) {
    let ans = [];
    let present = {};
    for (let i = 0; i < nums.length; i++) {
        present[nums[i]] = true;
    };
    for (let j = 0; j < nums.length; j++) {
        if (present[j+1] === undefined) ans.push(j+1);
    }
    return ans;
};