// Recursion & Dynamic Programming

// Towers of Hanoi

/* 
    Towers of Hanoi: In the classic problem of the Towers of Hanoi, you have 3 towers 
    and N disks of different sizes which can slide onto any tower. 
    
    The puzzle starts with disks sorted in ascending order of size from top to bottom 
    (i.e., each disk sits on top of an even larger one). 
    
    You have the following constraints: 

    (1)	 Only one disk can be moved at a time.
    (2)	 A disk is slid off the top of one tower onto another tower.
    (3)	 A disk cannot be placed on top of a smaller disk.

    Write a program to move the disks from the first tower to the last using stacks. 
    
    Hints: #744, #224, #250, #272, #318 

    Tower1 - [14, 22, 25, 29, 35] 
    Tower2 - [11]
    Tower3 - [3, 5, 9]

*/

/*
    I - three towers (arrays) with "n" disks of different sizes 
    O - Rearranged tower with disks from Tower1 shifted to Tower3
    C - having to retouch disks multiple times 2n − 1
    E - n/a

*/

/*
    First pop off the first element from tower1, and then move this element to tower3.

    Next, pop off subsequent element from Tower1, and move to Tower2.

    Next, move first element from tower3 to tower2.

    Following, pop off element from tower1, and move this element to tower3.

    Next, pop off element from tower2, and move to tower1.

    Then, move element from Tower 2 to Tower 3, 



*/

function moveNDisks( N,  fromPeg, toPeg, extraPeg ) {
    // if there's only one disk to move, then just print the move required
    if ( N==1 )
        document.write( "Move disk from Peg " + fromPeg + " to " + toPeg + "<br>" );
    else {
        // otherwise, then call the function to move N-1 disks out of the way...
        moveNDisks( N-1, fromPeg, extraPeg, toPeg );
        // then move 1 disk to the destination
        moveNDisks( 1, fromPeg, toPeg, extraPeg );
        // and the N-1 that were out of the way should be brought back
        moveNDisks( N-1, extraPeg, toPeg, fromPeg );
    }
}

// now, let's try a test case with 5 disks
console.log(moveNDisks( 5, "A", "B", "C" ));