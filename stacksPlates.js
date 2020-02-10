// Stacks & Queues

// Stack of Plates

/*

Imagine a (literal) stack of plates. If the stack gets too high, it might topple.

Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. 

Implement a data structure SetOfStacks that mimics this. Set-Of-Stacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
(that is, pop () should return the same values as it would if there were just a single stack)

*/

/*

    create a function SetOfStacks as the class

        let stack = {}
        stack.size = arbitrary value

    
    SetOfStacks.push() {
        stack.size += 1;
        push onto new stack instance
    }

    SetOfStacks.pop() {
        stack.size += 1;
        return the topmost value
    }

*/

// Functional method for Stack implementation

const Stack = (capacity) => {
    const totalCapacity = capacity;
    let instance = {};
    let size = 1;

    instance.push = (value) => {
        instance[size] = value;
        size += 1;
    };
    
    instance.pop = () => {
        let element = instance[size];
        delete instance[size];
        size -= 1;
        return element;
    }
    
    instance.peek = () => {
        if (size <= totalCapacity) {
            return true
        } else {
            return false
        }
    }

    return instance;
}

const SetOfStacks = (plates) => {
    let stackOne = Stack(3);
    let stackTwo = Stack(5);
    let stackThree = Stack(2);

    let stacks = [stackOne, stackTwo, stackThree];
    
    for (let i = 0; i < stacks.length; i++) {
        let currentStack = stacks[i];
        for (let j = 0; j < plates; j++) {
            if (currentStack.peek()) {
                currentStack.push(j)
            } else if (!currentStack.peek()) {
                i += 1;
                currentStack = stacks[i];
                if (currentStack === undefined) {
                    let remainingPlates = plates - j;
                    let newStack = Stack(remainingPlates);
                    currentStack = newStack;
                }
                currentStack.push(j)
            }
        }
    }
}




