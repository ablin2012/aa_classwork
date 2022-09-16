var twoSum = function(nums, target) {
    let visited = {};
    for (let i = 0; i < nums.length; i++) {
        if (visited[nums[i]] != undefined) {
            return [visited[nums[i]], i];
        } else {
            visited[target - nums[i]] = i;
        }
    }
};