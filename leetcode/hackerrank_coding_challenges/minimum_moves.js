function minimumMoves(arr1, arr2) {
    // Write your code here
    let moves = 0;
    for (let i = 0; i < arr1.length; i++) {
        let curr1 = arr1[i];
        let curr2 = arr2[i];
        while (curr1 || curr2) {
            moves += Math.abs(curr1%10 - curr2%10);
            curr1 = Math.floor(curr1/10);
            curr2 = Math.floor(curr2/10);
        }
    }
    return moves
}