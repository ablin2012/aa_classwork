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

var searchMatrix2 = function(matrix, target) {
	let left = 0;
	let right = matrix.length - 1;
	let rangeArray = []
    
	while (left <= right) {
    		const midIndex = Math.floor((left + right) / 2);
    		const midArray = matrix[midIndex];
   	 
    		if (midArray[0] <= target && target <= midArray[midArray.length - 1]) {
        			rangeArray = midArray;
        			break;
    		} else if (midArray[0] > target) {
        			right = midIndex - 1;
    		} else if (midArray[midArray.length - 1] < target) {
        			left = midIndex + 1;
    		}
	}
    
	if (rangeArray.length === 0) return false;
    
	left = 0;
	right = rangeArray.length - 1;
    
	while (left <= right) {
    		const midIndex = Math.floor((left + right) / 2);
    		const midEle = rangeArray[midIndex];
   	 
    		if (midEle === target) {
        			return true;
    		} else if (midEle > target) {
        			right = midIndex - 1;
    		} else {
        			left = midIndex + 1;
    		}
	}
    
	return false;
};
