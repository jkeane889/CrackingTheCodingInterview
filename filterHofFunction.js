// Filter HOF

/*

    Implement the Array.prototype.filter method by hand

*/

// filter will filter through results commanded over an array

const filter = (arr, filterCallback) => {
    if (!arr.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return []
    } else {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (filterCallback(arr[i], i, arr)) {
                result.push(arr[i]);
            };
        };

        return result
    };
};