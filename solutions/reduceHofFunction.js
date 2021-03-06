// HOF Functions

/*

    Implement the Array.prototype.reduce method by hand.

*/

const reduce = (arr, initialValue, reduceCallback) => {
    if (!arr.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
        return []
    } else {
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue ? initialValue : arr[0];

        for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
            value = reduceCallback(value, arr[i], i, arr);
        };

        return value;
    };
};