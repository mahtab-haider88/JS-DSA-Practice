class Node{
    constructor(value){
        this.value = value
        this.next = null
    }       
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}

let list = new SinglyLinkedList()
list.push('Hello')
list.push('World')
console.log(list)       
list.push('!')
console.log(list)   
list.push('How')
list.push('Are')
list.push('You')
console.log(list)       
list.push('?')
console.log(list)
console.log('Head Value: ', list.head.value)
console.log('Tail Value: ', list.tail.value)
console.log('List Length: ', list.length)
console.log('Second Node Value: ', list.head.next.value)
console.log('Fourth Node Value: ', list.head.next.next.next.value)
console.log('------------------')
list.push(100)
console.log(list)       
console.log('New Tail Value: ', list.tail.value)
console.log('Updated List Length: ', list.length)
console.log('------------------')
list.push(200)
console.log(list)       
console.log('New Tail Value: ', list.tail.value)
console.log('Updated List Length: ', list.length)
console.log('------------------')
list.push(300)
console.log(list)       
console.log('New Tail Value: ', list.tail.value)
console.log('Updated List Length: ', list.length)
console.log('------------------')

module.exports = {SinglyLinkedList, Node};

// ------------------
// Singly Linked List Implementation
// ------------------
// Create a Singly Linked List class with a push method to add nodes to the end of the list.
// Each node should have a value and a pointer to the next node.
// The Singly Linked List should keep track of the head, tail, and length of the list.
// Test the implementation by adding multiple nodes and verifying the head, tail, and length properties.
// Example Usage:
// let list = new SinglyLinkedList()
// list.push('Hello')
// list.push('World')
// console.log(list)
// Output:
// SinglyLinkedList {
//   head: Node { value: 'Hello', next: Node { value: 'World', next: null } },
//   tail: Node { value: 'World', next: null },
//   length: 2
// }

