/*
Create a stack to hold all angles
Create global array for solution

create variable n
while N < stack.length

pop off top element

if element === "<"
    if global array



*/

const solution = angles => { // >,<,<,>,<
let stack = []; // [<, >, <, <, >, <]

let opening = "<";
let closing = ">";
let opposites = {
    "<": ">",
    ">": "<"
};

let totalOpenings = 0; // 4
let totalClosings = 0; // 2

for (let char of angles) { // 
    if (opening === char) { //
        stack.push(opening);   
        totalOpenings += 1; //   
    } else if (closing === char) { // 
        let opposite = opposites[char]; // > 
        if (!stack.length) {
            stack.push(opposite, closing) // 
            totalClosings += 1; // 
            totalOpenings += 1; // 
        };

        let lastItem = stack[stack.length - 1]; // 
        
        if (opposites !== lastItem) {

        } else {
            stack.push(closing); // 
            totalClosings += 1; //
        }
    }
}

if (totalOpenings > totalClosings) {
    while (totalOpenings > totalOpenings) {
        stack.push(closing);
        totalOpenings += 1;
    }
}

return stack.join('')
};

console.log(solution("><<><")); // "<><<><>>"