const minimumKeypadClicks = function(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let keypad1 = 0;
    let keypad2 = 0;
    for (let i = 0; i < str.length; i++) {
        let curr = alphabet.indexOf(str[i]) + 1;
        keypad1 += 3 - curr%3;
        keypad2 += Math.ceil(curr/9);
    }
    return Math.min(keypad1, keypad2);
}

console.log(minimumKeypadClicks('hello'));

const dummySite = function(requests) {
    let ans = [];
    let registeredUsers = {};
    let loggedIn = null;
    for (let i = 0; i < requests.length; i++) {
        let request = requests[i].split(' ');
        if (request[0] === "register") {
            if (registeredUsers[request[1]]) {
                ans.push('Username already exists');
                console.log('1', request)
            } else {
                registeredUsers[request[1]] = request[2];
                ans.push('Registered Successfully');
                console.log('2', request)
            };
        } else if (request[0] === "login") {
            if (registeredUsers[request[1]] === request[2]) {
                loggedIn = request[1];
                ans.push('Logged In Successfully');
                console.log('3', request)
            } else {
                ans.push('Login Uncsuccessful');
                console.log('4', request)
            };
        } else if (request[0] === "logout") {
            if (loggedIn === request[1]) {
                loggedIn = null;
                ans.push('Logged Out Successfully');
                console.log('5', request)
            } else {
                ans.push('Logout Unsuccessful');
                console.log('6', request)
            };
        }
    }
    return ans;
}

let requests = ['register user05 qwerty', 'login user05 qwerty', 'logout user05'];

console.log(dummySite(requests));