// LFU Cache

/*
    Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.
    get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
    put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.

    Note that the number of times an item is used is the number of calls to the get and put functions for that item since it was inserted. This number is set to zero when the item is removed.

    Follow up:
    Could you do both operations in O(1) time complexity?

    Example:

    LFUCache cache = new LFUCache( 2 /* capacity */ );

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    cache.get(2);       // returns -1 (not found)
    cache.get(3);       // returns 3.
    cache.put(4, 4);    // evicts key 1.
    cache.get(1);       // returns -1 (not found)
    cache.get(3);       // returns 3
    cache.get(4);       // returns 4

*/

        /*
            I - capacity of cache represented with a number
            O - nothing
            C - constant time input?
            E - when capacity equals 0?

        */

var LFUCache = function(capacity) {
    this.cache = {};
    this.cache['count'] = 1; // initialize count as awaiting first item
    this.cache['maxStorage'] = capacity;
};

/*
    I - key that corresponds to a value in the cache
    O - value that defined by key
    C - constant time
    E - value not available anymore (removed due to )
*/

LFUCache.prototype.get = function(key) {
    /*
        get object that is represented by key

            on get call of object, increase its getCount by 1, and decrease
            all other getCounts by 1 (most recently "gotten" element)

    */

    if (this.cache.maxStorage === 0) {
        return -1
    }

    if (this.cache[key]) {
        let element = this.cache[key];
        let value = element[key];
        element.getCount += 1;
        return value
    }

    return -1
};

/*
    I - key/value pair to add to cache
    O - nothing
    C - constant time
    E - not enough capacity
*/

LFUCache.prototype.put = function(key, value) {
    /*        
        Create a hash object for cache

        On a put request, create a new object for Put (putObj)

        Add to cache, and reduce all other cache object's putCounts by one, as this is
        the newest addition to cache (and most recent)

        Increase capacity by 1

            key : {
                key: value,
                getCount: 0,
                putCount: capacityValue,
                placement: capacityValue
            }

        If capacity has been reached while putting

        go into cache and find element with lowest getCount, remove it, and insert
        new Put item

    */

    if (this.cache.maxStorage > 0) {
    
    let cacheLength = 0;
    
    for (let i = 0; i < Object.keys(this.cache).length; i++) {
            if (parseInt(Object.keys(this.cache)[i])) {
                let element = this.cache[Object.keys(this.cache)[i]];
                element.putCount -= 1;
                cacheLength++;
            }
    }

    if (cacheLength === this.cache.maxStorage) {
        let oldest = null;
        let oldestIndex = null;
        let elements = Object.keys(this.cache);

        for (let i = 0; i < elements.length; i++) {
            if (parseInt(elements[i])) {
                let element = this.cache[elements[i]];
                if (!oldest) {
                    oldest = element
                    oldestIndex = elements[i]
                } else if (oldest.getCount > element.getCount) {
                    oldest = element
                    oldestIndex = elements[i]
                } else if (oldest.putCount > element.putCount) {
                    oldest = element;
                    oldestIndex = elements[i]
                }
            }
        }

        delete this.cache[oldestIndex];
        this.cache.count -= 1;
    }

    let element = {};
    element[key] = value;
    element['getCount'] = 0;
    element['putCount'] = 1;
    element['placement'] = this.cache.count;
    this.cache[key] = element;
    this.cache.count += 1;    

    }

};


let cache = new LFUCache(2);
cache.put(3, 1);
cache.put(2, 1);
cache.put(2, 2);
cache.put(4, 4);
console.log(cache.get(2)); // returns 2