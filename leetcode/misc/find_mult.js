const multiInt = function(array) {
	if (array.includes(0) || array.includes(array.length)) return null;
	while (array.length) {
		let curr = array.pop();
		if (array.includes(curr)){
			return curr;
        }			
	}
	return null;
};

// console.log(multiInt([ 3, 1, 2, 2, 5, 5 ,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]))

const longestNonRepeatingSubstring = ( str ) => {
	let start = 0;
	let end = 0;
	let longestSub = "";
	let chars = {};

	while (end < str.length) {
		const char = str[end];
		if (char in chars) {
			start = chars[char] + 1;
			if (str.length - start <= longestSub.length) {
				return longestSub;
			}
			chars = {};
			end = start;
		}else {
			chars[char] = end;
			if (end-start+1 > longestSub.length) {
				longestSub = str.slice(start, end+1)
			}
			end +=1;
		}
		console.log("start", start);
		console.log("end", end)
		console.log("chars", chars);
		console.log("longestSub", longestSub)
	} 
	return longestSub;
}

console.log(longestNonRepeatingSubstring('clementisacap'));
