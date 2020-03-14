// Kabbage Coding Challenge

//  Solution that is solving the given test cases for the prompt

const solution = (S) => {
    let strArr = S.split(' ');
    
    let nameVerifier = null;
    let countVerifier = null;
    let helpVerifier = null;

    for (let i = 0; i < strArr.length; i++) {
        let element = strArr[i].toLowerCase();
        
        if (element === "--count") {
            let int = parseInt(strArr[i + 1]);
            if (!int) {
                countVerifier = false
            } else {
                if (int >= 10 && int <= 100) {
                    countVerifier= true
                };
            };
        };

        if (element === "--name") {
            let elem = strArr[i + 1];
            if (elem.length >= 3 && elem.length <= 10) {
                nameVerifier = true;
            } else {
                nameVerifier = false;   
            };
        };

        if (element === "--help") {
            let elem = strArr[i + 1];
            if (elem) {
                helpVerifier = false
            } else {
                helpVerifier = true
            }
        };
    };

    if (helpVerifier) {
        return 1
    };

    if (nameVerifier || countVerifier) {
        if (helpVerifier) {
            return 1
        } else {
            return 0
        };
    };

    return -1
};

// Given examples from Codility
let example1 = "--count g"; // -1
let example4 = "--count 44"; // 0
let example3 = "--name SOME_NAME --COUNT 10"; // 0
let example2 = "--help name"; // -1
let example5 = "--name abc --help"; // 1
let example6 = "--Help"; // 1

console.log(solution(example1));
console.log(solution(example2));
console.log(solution(example3));
console.log(solution(example4));
console.log(solution(example5));
console.log(solution(example6));

