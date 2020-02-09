// Sum Lists

// I - two numbers represented by a linked list, with node's value
//      representing digit of number in reverse order
// O - sum of two linked-listed numbers as its own linkedList
// C - time/space
// E - uneven linked list lengths (adding zero to front of number if necessary)

const LinkedList = () => {
    var list = {};
    list.head = null;
    list.tail = null;
  
    list.addToTail = (value) => {
      let newTail = Node(value);
      
      if (!list.head) {
        list.head = newTail;
      };
  
      if (list.tail) {
        list.tail.next = newTail;
      };
  
      list.tail = newTail;
    };
  
    list.removeHead = () => {
      if (list.head === null) {
        return null
      }
  
      let currentHead = list.head;
      list.head = list.head.next;
  
      return currentHead.value;
    };
  
    list.contains = (target) => {
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
  
/*

    create helper function to add items from linkedList (input is a single LinkedList)
        create digitString to store digits from LinkedList

        let node = linkedList.head

        while (node.next) {
            string.unshift(node.data)
        }

        return digitString

    create reversedLinkedList = (sum) => {
        let stringArray = sum.toString().split('');
        let linkedList = {};
        
        while (stringSum.length) {
            let char = stringSum.pop();
            let node = {};
            
            if (!linkedList.head) {
                let node.data = char;
                let node.next = null;
            }

            node.data = char;
            node.next = linkedList.head;
            let lastNode = linkedList.head;
            linkedList.head = node;
        }

        return linkedList
    }

    create function to add linkedLists from parameters
        let reversedDigitStringOne = helper function (linkedListOne); 
        let reversedDigitStringTwo = helper function (linkedListTwo);
        
        if (reversedDigitStringTwo.length < reversedDigitStringOne.length) {
            reversedDigitStringTwo.unshift(0);
        } else if (reversedDigitStringOne.length < reversedDigitStringTwo.length) {
            reversedDigitStringOne.unshift(0);
        }

        let parsedStringOne = parseInt(reversedDigitStringOne);
        let parsedStringTwo = parseInt(reversedDigitStringTwo);

        let sum = parsedStringOne + parsedStringTwo;

        return reversedLinkedList(sum)

*/

