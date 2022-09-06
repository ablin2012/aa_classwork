function chooseFlask(requirements, flaskTypes, markings) {
    // Write your code here
    let flasks = {};
    let waste = {};
    for (let i = 0; i < flaskTypes - 1; i++) {
        flasks[i] = [];
        waste[i] = 0;
    }
    for (let i = 0; i < markings.length; i++) {
        flasks[markings[i][0]].push(markings[i][1]);
    }
    for (let i = 0; i < flaskTypes - 1; i++) {
        let curr = flasks[i];
        for (let j = 0; j < requirements.length; j++) {
            for (let k = 0; k < curr.length; k++) {
                if (requirements[j] < curr[k]) {
                    waste[i] += curr[k] - requirements[j];
                    break
                }
            }
        }
    }
    let leastWaste = waste[0];
    let ans = 0;
    for (let i = 1; i < flaskTypes - 1; i++) {
        if (waste[i] < leastWaste) {
            ans = i;
        }
    }
    for (let i = 0; i < markings.length; i++) {
        if (markings[i][0] === ans) return i;
    }
}