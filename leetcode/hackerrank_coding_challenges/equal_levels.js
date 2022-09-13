function updateTimes(signalOne, signalTwo) {
    // Write your code here
    const shortest = Math.min(signalOne.length, signalTwo.length);
    let max = 0;
    let changeCount = 0;
    for (let i = 0; i < shortest; i++) {
        if (signalOne[i] === signalTwo[i]) {
            if (signalTwo[i] > max) {
                max = signalTwo[i];
                changeCount += 1;
            }
        }
    }
    return changeCount;
}