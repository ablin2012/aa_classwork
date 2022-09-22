var lengthOfLongestSubstring = function(s) {
    let visited = {};
    let longest = 0;
    let start = 0;
    let end = 0;
    while(end < s.length) {
        if(visited[s[end]] != undefined) {
            start = visited[s[end]] + 1;
            end = visited[s[end]] + 1;
            visited = {};
        };
        if(end - start + 1 > longest) {
            longest = end - start + 1;
        };
        visited[s[end]] = end;
        end += 1;
    };
    return longest;
};