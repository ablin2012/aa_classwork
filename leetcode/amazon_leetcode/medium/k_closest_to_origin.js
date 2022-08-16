const kClosest = function(points, k) {
    let distances = [];
    let ans = [];
    for (let i = 0; i < points.length; i++) {
        distances.push(Math.sqrt(Math.pow(points[i][0],2) + Math.pow(points[i][1],2)) )
    }
    distances = distances.sort(function(a,b){return a-b});
    distances = distances.slice(0,k);
    for (let i = 0; i < points.length; i++) {
        if (distances.includes(Math.sqrt(Math.pow(points[i][0],2) + Math.pow(points[i][1],2)))) {
            ans.push(points[i]);
        }
    }
    return ans;
}