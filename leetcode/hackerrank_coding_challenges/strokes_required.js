function strokesRequired(picture) {
    // Write your code here
    let strokes = 0;
    let horiz = {a: [], b: [], c:[]};
    let prevHoriz;
    for (let i = 0; i < picture.length; i++) {
        prevHoriz = horiz;
        horiz = {a: [], b: [], c:[]}
        for (let j = 0; j < picture[0].length; j++) {
            horiz[picture[i][j]].push(j);
            if (!prevHoriz[picture[i][j]].includes(j) && !(horiz[picture[i][j]].includes(j+1) || horiz[picture[i][j]].includes(j - 1))) {
                if (!(prevHoriz[picture[i][j]].includes(j + 1) && picture[i][j] === picture[i][j+1])) {          
                    strokes += 1;
                }
            }
        }
    }
    return strokes;
}