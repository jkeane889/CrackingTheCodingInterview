// Stacks And Queues

// Stack Min

/*

How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time

- To design this stack and its methods, we could add functionality to the push() method
before arbitrarily pushing items onto the stack.

- If the stack is empty (peek), then push the value we are pushing onto the array
- If the stack is not empty, first pop() the current value off of the stack and
    compare this value to the value we are looking to push onto the stack.

    If the popped-off value from the stack is less than the value we are looking
    to push onto the stack, first push the greater value onto the stack, and
    then push the popped-off value.

        - This will then mean that the items on the stack are in order
        from least to greatest at the onset of the creation of the stack

- For pop(), design this fuction as you normal, where the function just returns the
top value off of the stack.

- For the new min() function, this will just be a function that calls pop() and then returns
the popped value from the stack back to the user

*/