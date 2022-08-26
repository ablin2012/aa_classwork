const oneAway = function(str1, str2) {
    if (str1.length === str2.length) {
        let differences = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) {
                if (differences) {
                    return false;
                } else {
                    differences += 1;
                }
            }
        }
        return true;
    } else {
        if (Math.abs(str1.length - str2.length) > 1) {
            return false;
        } else {
            let long = (str1.length > str2.length) ? str1 : str2;
            let short = (str1.length > str2.length) ? str2 : str1;
            let curr1 = 0;
            let curr2 = 0;
            while (curr1 < long.length) {
                if (long[curr1] != short[curr2]) {
                    curr1 += 1;
                    if (long[curr1] != short[curr2]) {
                        return false;
                    }
                }
                curr1 += 1;
                curr2 += 1;
            }
        }
        return true;
    }
}

console.log(oneAway('abab', 'aaa'))