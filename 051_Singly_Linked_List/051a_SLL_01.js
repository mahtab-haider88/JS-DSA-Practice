class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let first = new Node("Hi")
let second = new Node("There")
first.next = second
let third = new Node("!")
second.next = third
console.log(first)

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;  }

    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){}
}
let list = new SinglyLinkedList()
console.log(list)

list.push("Hello")
console.log(list)

list.push("World")
console.log(list)

list.push("!")
console.log(list)           





