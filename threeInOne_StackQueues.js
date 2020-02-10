// Stacks and Queues 

// Three in One

/*

Describe how you could use a single array to implement three stacks. 

- Given an arbitrary length of the array, you could split it evenly with the module operator
- Whever you're adding an item to the array, you first will slice the array by the length of one stack (above)
    next, you will then check to see how many elements are in these partition of the array.
    If this partition is full (as in there are elements at each index), you will then go to 
    add the current element into the next partition of the array (second stack). You will 
    continue this method onto the third partition if the first and second partitions are full.
- If you are looking to pop() an element from an array, would you ideally look at the third
    partition first because this is the last partition that you added items to? If so, you
    would then slice the third part of the array with the length (determined in the first step), 
    and then from there you shoud unshift elements from the front of the array, saving and 
    returning them as required
- If you wanted to peek at one of the particular stacks, you would then again slice the array
    based on the lengths of each stack you determined above in the first step.  You would then
    look at each index in the sliced partition and create a variable to store the count, which
    will increase when you iterate over the array and an item exists at an index
- If you wanted to check if a particular stack within the array is empty, you will try to slice
    the array.  If you have the count (peek) of the elements in the array, you would pull out
    all elements from the array.  If you were then trying to access a particular partition, and 
    that partition was empty, the slice method might not work, and that is when you would know
    that a specific partition would be empty.

*/

