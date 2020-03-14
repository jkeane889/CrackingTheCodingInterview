// Trees & Graphs

// Check SubTree

/*
    T1 and T2 are two very large binary trees, with T1 much bigger than T2. 
    Create an algorithm to determine if T2 is a subtree of Tl.

    A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree of n is identical to T2. 
    That is, if you cut off the tree at node n, the two trees would be identical. 
*/

/*
    create two linked lists to store the values of both trees

    create recursive function to traverse trees in Post-order and create a linked list

    create function to check subTree values from larger tree

        if node.value equal head.value of linkedList of T2 tree
            continue to check the remainder of T2's linked items
            against T1's linkedList items

            use a boolean tracker to make sure that each value in T2
            is accounted for in the T1 tree

            use an incrementor to track if you have reached the end of
            T2 linked list

            if you have reached the end of T2 linkedList, and boolean value
            is still true, T2 tree is a subtree of T1         
*/



