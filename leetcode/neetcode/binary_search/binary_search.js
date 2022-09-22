var search = function(nums, target) {
    if (nums.length === 0) return -1;
    const mid = Math.floor(nums.length/2);
    if (nums[mid] === target) return mid;
    const left = nums.slice(0, mid);
    const right = nums.slice(mid + 1);
    if (nums[mid] > target) {
        return search(left, target);
    } else {
        const temp = search(right, target);
        if (temp != -1) {
            return temp + left.length + 1;
        } else {
            return -1;
        }
    }
};