// Recursion & Dynamic Programming

// Triple Step

/*
    Triple Step: A child is running up a staircase with n steps and can hop either 
    1 step, 2 steps, or 3 steps at a time. 
    
    Implement a method to count how many possible ways the child can run up the stairs. 
    
    Hints: #152, #178, #217, #237, #262, #359 

*/

/*
    I - n steps (given amount of steps on staircase)
    O - number of possible ways the child can run up the stairs
    C - time complexity? 
    E - no N given

*/

/*
    - Is this (1) iteration, (2) subproblems, (3) selection, (4) ordering, 
    (5) divide & conquer, (6) depth vs breadth first search?
    
    - Top-Down Approach:
        -  how can we divide the problem for case N into subproblems?

    - Bottoms-Up Approach:    
    
    Base Case: when n <= 0, add a combination to total

    Recursive Case:

        iterate over combinations (3, 2, 1)
        depth first search of combination using array of [3, 2, 1] step combinations
    
*/

const tripleStep = n => {
    let combinations = 0;
    
    const getStepCombinations = (stepArr, n) => {
        if (n < 0) {
            return
        };
        
        if (n === 0) {
            combinations += 1;
            return
        };

        if (!stepArr) {
            stepArr = [1, 2, 3];
        };

        for (let i = 0; i < stepArr.length; i++) {
            let stepType = stepArr[i];
            n -= stepType;
            getStepCombinations(stepArr, n);                        
        };
    };

    getStepCombinations(null, n);
    return combinations;
};