var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    let mid = Math.floor(matrix.length/2);
    let midArray = matrix[mid]
    if (midArray[0] <= target && midArray[midArray.length - 1] >= target) {
        return bsearch(midArray, target);
    };
    let left = matrix.slice(0,mid);
    let right = matrix.slice(mid + 1);
    if (target < midArray[0]) return searchMatrix(left,target);
    if (target > midArray[midArray.length - 1]) return searchMatrix(right,target);
};

var bsearch = function(array, target) {
    if (array.length === 0) return false;
    let mid = Math.floor(array.length/2);
    if (array[mid] === target) return true;
    let left = array.slice(0,mid);
    let right = array.slice(mid + 1);
    if (array[mid] > target) {
        return bsearch(left, target);
    } else {
        return bsearch(right,target);
    }
}