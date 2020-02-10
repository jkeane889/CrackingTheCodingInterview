// Stacks & Queues

// Queue via Stacks

/*

 Implement a MyQueue class which implements a queue using two stacks. 

*/

/*

    create a MyQueue class
        create a stack variable
        create a stack variable

        create enqueue method
            with enqueue, items get added to the first stack 
            push method will initialize behavior 

        create dequeue method
            with dequeue, items intially added are the first to be returned
            if dequeued is used, keep popping off elements from 
                stackOne and pushing them onto stack two for storage 
                until value you are looking for matches value in stack
                    - then store value, delete from stack, and re-push all elements
                    back onto first stack

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

// ES6 Class syntax
class MyQueue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
        this.dequeudVal = null;
    }

    enqueue(value) {
        this.stackOne.push(value);
    }

    dequeue() {
        if (this.stackOne.size() !== 0) {
            while (this.stackOne.size() > 0 && !this.dequeudVal) {
                let temp = this.stackOne.pop();
                this.stackTwo.push(temp);
                if (this.stackOne.size() === 1) {
                    this.dequeudVal = this.stackOne.pop();
                    while (this.stackTwo.size() > 0) {
                        let orig = this.stackTwo.pop();
                        this.stackOne.push(orig);
                    }
                }
            }
        }

        return this.dequeudVal;
    }
}




