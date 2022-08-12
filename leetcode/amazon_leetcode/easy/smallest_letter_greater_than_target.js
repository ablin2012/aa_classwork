// Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 

// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"

// Example 2:
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"

// Example 3:
// Input: letters = ["c","f","j"], target = "d"
// Output: "f"
 
// Constraints:
// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

const nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length - 1; i++) { // we will iterate through each letter in the array (excluding the last element)
        if (letters[i] === target) { // if the letter in the array is equal to the target, we know the next one is the smallest largest given the order of the array
            return letters[i+1]; // we will return the next item in the array
        } else if (letters[i] > target) { // if we find a letter greater than the target, we know that that's our return value give the order of the array
            return letters[i];
        }
    }
    // if we didn't satisfy any of the cases during our for loop we know that the target must be greater than all values within
    return letters[0]; // this means that we must wrap around to find the smallest larger letter, this will be the first element of the array given the order of the array
 
}