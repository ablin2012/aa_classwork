var topKFrequent = function(nums, k) {
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        if (counts[nums[i]]) {
            counts[nums[i]] += 1;
        } else {
            counts[nums[i]] = 1;
        }
    }
    let occurences = {};
    for (const key in counts) {
        if (occurences[counts[key]]) {
            occurences[counts[key]].push(key);
        } else {
            occurences[counts[key]] = [key];
        }
    }
    let most = [];
    for (let i = nums.length; i > 0; i--) {
        if (occurences[i]) {
            for(let j = 0; j < occurences[i].length; j++) {
                most.push(occurences[i][j]);
            }
        }
        if (most.length === k) return most;
    }
};