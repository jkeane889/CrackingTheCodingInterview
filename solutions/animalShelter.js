// Stacks & Queues

// Animal Shelter

/*

An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). 

They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in Linked list data structure. 

*/

/*

    create AnimalShelter function
    
    function to add animal to shelter
    
        Create two queues to represent cats and dogs
        
        Create linkedList to represent the oldest and newest adoptions (if purchaser has no preference on animal type)
            parameters are animal name, animal type, and date of delivery at shelter
            use the linkedList's basic functionality to add each animal to the linkedList
            if the animal is a Dog, add it to the dog Queue (enqueue)
            if the animal is a Cat, add it to the cat Queue (enqueue)
    
    function to adopt from shelter

        if the user does not care about the animal type, 
            look at linkedList and call dequeueAny from linkedList (returns oldest animal)

        if user prefers a dog
            deQueueDog from dog queue (which will be the oldest)

            
        if user prefers a cat
            deQueueDog from cat queue (which will be the oldest)
        
*/

var LinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;

    list.addToTail = function(value) {
        let newTail = Node(value);
        
        if (!list.head) {
            list.head = newTail;
        };

        if (list.tail) {
           list.tail.next = newTail;
        };

        list.tail = newTail;
    };

    list.removeHead = function() {
        if (list.head === null) {
        return null
        }

        let currentHead = list.head;
        list.head = list.head.next;

        return currentHead.value;
    };

    list.contains = function(target) {
        let node = list.head;

        while (node) {
            if (node.value === target) {
                return true
            }

            node = node.next
        }

        return false
    };

    return list;
};

var Node = function(value) {
    var node = {};

    node.value = value;
    node.next = null;

    return node;
};

class Queue {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    constructor() {
        this.storage = {};
        this.count = 0;
        this.last = 1;
        this.first = 1;
    }

    enqueue(value) {
        this.storage[this.last] = value;
        this.count++;
        this.last++;
    }

    dequeue() {
        if (this.count > 0) {
            let dequeued = this.storage[this.first];
            delete this.storage[this.first];
            this.count--;
            this.first++;
            return dequeued
        }
    }

    size() {
        return this.count;
    }
}

class AnimalShelter {

    constructor() {
        this.allAnimals = LinkedList(); 
        this.catQueue = new Queue;
        this.dogQueue = new Queue;
    }
    
    enqueue(name, animalType, date) {
        let newAnimal = {};
        newAnimal.name = name;
        newAnimal.type = animalType;
        newAnimal.date = date;

        if (animalType === 'cat') {
            this.catQueue.enqueue(newAnimal);
        }

        if (animalType === 'dog') {
            this.dogQueue.enqueue(newAnimal);
        }

        this.allAnimals.addToTail(newAnimal)
    } 

    dequeueAny() {
        let earliestDate = new Date();
        let oldestAnimal = null;

        this.allAnimals.getOldest = (date) => {
            let node = this.allAnimals.head;

            while (node) {
                let deliveryDate = new Date(node.value.date);
                if (deliveryDate < earliestDate) {
                    earliestDate = deliveryDate; 
                    oldestAnimal = node;
                    node = node.next  
                } else {
                    node = node.next
                }
            }
        }

        this.allAnimals.getOldest(earliestDate);
        return oldestAnimal;
    }

    dequeueDog() {
        let oldestDog = this.dogQueue.dequeue();
        return oldestDog; 
    }

    dequeueCat() {
        let oldestCat = this.catQueue.dequeue();
        return oldestCat;
    }
};
