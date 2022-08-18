// Cut and Add
// Harry and Potter took a word string. Harry chose a number M (less than the length of the
// string) and Potter chose N (less than the length of the string). Harry will cut M alphabets
// from the end of the string and then add it to the beginning and will give it to Potter. Then,
// Potter will also cut N alphabets from the end of the string, add it to the beginning and ther
// give to Harry. This process will continue till they get the original word string back.
// For a given string and given values of M and N, find the number of turns in which they will
// get the original word string back.

const stepToOriginal = function(str, m, n) {
    let count = 1;
    let length = str.length;
    let newStr = str.slice(length - m, length) + str.slice(0,length - m);
    newStr = newStr.slice(length - n, length) + newStr.slice(0,length - n);
    while (newStr != str) {
        newStr = newStr.slice(length - m, length) + newStr.slice(0,length - m);
        newStr = newStr.slice(length - n, length) + newStr.slice(0,length - n);
        count += 1;
    }
    return count;
}

console.log(stepToOriginal('hello', 1, 3))
