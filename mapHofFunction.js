// 70 Questions - JS

// Implement the HOF Map Function 

/*

    Implement the Array.prototype.map method by hand

*/

const map = (arr, mapCallback) => {
    if (!arr.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
        return []
    } else {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(mapCallback(arr[i], i, arr))
        };

        return result
    };
};