/*
    Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

    Input: [[1,1],[2,2],[3,3]]
    Output: 3
    Explanation:

        ^
        |
        |        o
        |     o
        |  o  
        +------------->
        0  1  2  3  4

*/

/*

    Create a potential line object

    Strategy

    Look at each element in the array

    Take an element and add one to its x and one to its y (linear, positive)
    Take an element and subtract one from its x and from to its y (linear, negative)

    iterate through the array and see if there is an element equivalent to either case

    if there isn't one, move onto the next element in the array, and rerun the above

    if there is, add first coordinate to potential line object, and continue checking from this
    current coordinate (recusion???)
        - splice out first coordinate and base case is when array elements === zero

    Edge case: larger straight line

*/

const findMaxPoints = arr => {
    let allPoints = {};
    let potentialPoints = {};

    arr.forEach((element) => {
        allPoints[element] = true
    });

    const checkArr = testArr => {
        if (testArr.length === 0) {
            return
        }

        for (let i = 0; i < testArr.length; i++) {
            let potentialCoord = testArr[i];
            let posSlopeCoords = [potentialCoord[0] + 1, potentialCoord[1] + 1].toString();
            let negSlopeCoords = [potentialCoord[0] - 1, potentialCoord[1] + 1].toString();
            let lastNegSlopeElem = [potentialCoord[0] + 1, potentialCoord[1] - 1].toString();
            let lastPosSlopeElem = [potentialCoord[0] - 1, potentialCoord[1] + 1].toString();


            if (allPoints[posSlopeCoords]) {
                if (potentialPoints[lastNegSlopeElem]) {
                    potentialPoints[potentialCoord] = potentialCoord;
                } else if (potentialPoints[lastPosSlopeElem]) {
                    potentialPoints[potentialCoord] = potentialCoord;
                }
                potentialPoints[potentialCoord] = potentialCoord;
                testArr.splice(i, 1);
                checkArr(testArr);
            } else if (allPoints[negSlopeCoords]) {
                if (potentialPoints[lastNegSlopeElem]) {
                    potentialPoints[potentialCoord] = potentialCoord;
                } else if (potentialPoints[lastPosSlopeElem]) {
                    potentialPoints[potentialCoord] = potentialCoord;
                }
                potentialPoints[potentialCoord] = potentialCoord;
                testArr.splice(i, 1);
                checkArr(testArr);
            }
        }
    };

    checkArr(arr);
    return Object.keys(potentialPoints);
};


console.log(findMaxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));
