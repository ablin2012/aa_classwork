var isHappy = function(n) {
    let visited = {};
    while(n != 1) {

        let num = 0;
        while(n != 0) {
            num += Math.pow(n%10,2);
            n = Math.floor(n/10);
        };
        if (visited[num] != undefined) return false;
        visited[num] = true;
        n = num;
    };
    return true;
};