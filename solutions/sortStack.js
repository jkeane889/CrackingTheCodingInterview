// Stacks & Queues

// Sort Stack

/*
    Write a program to sort a stack such that the smallest items are on the top. You can use
    an additional temporary stack, but you may not copy the elements into any other data structure
    (such as an array). The stack supports the following operations: push, pop, peek, and is Empty
*/

/*
    Create two stacks

    Before pushing onto stackOne, check to see if there is an item on stackTwo

    If both stacks are Empty
        push new item onto stackOne

    If stackOne isn't empty
        pop() item from StackOne and push onto StackTwo
        
        compare StackTwo's value against new value for stackOne

            if lower & stackOne is empty
                push onto stack One
            if lower but stack One isn't empty
                pop() next value from stackOne, and compare it with stackOne value
                If this second item's value is lower than stackOne's, push that item first 

*/

class Stack {
    constructor() {
        this.storage = {};
        this.i = 0;
    }

    push(val) {
        this.storage[this.i] = val;
        this.i += 1;
    }

    pop() {
        let element = this.storage[this.i - 1];
        delete this.storage[this.i - 1];
        this.i -= 1;
        return element;
    }

    size() {
        let keys = Object.keys(this.storage);
        return keys.length
    }
}

const sortStack = (stackOne, stackTwo, value) => {
    let checked = stackOne.size();
    let pushed = false;

    while (checked > 0) {
        let temp = stackOne.pop();
        let obj = {
            checked: true,
            val: temp,
            diff: (temp > value) ? true : false
        }
        stackTwo.push(obj);
        checked -= 1;
    }

    while (stackTwo.size()) {
        let newTemp = stackTwo.pop();
        if (!newTemp.diff) {
            stackOne.push(newTemp.val)
        } else if (newTemp.diff && !pushed) {
            pushed = true;
            stackOne.push(value)
            stackOne.push(newTemp.val)
        } else {
            stackOne.push(newTemp.val)
        }
    }
};