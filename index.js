class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }



    append(value) {
        if (this.head === null) {
            const node = new Node(value);
            this.head = node;
            this.count++;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            const node = new Node(value);
            current.next = node;
            this.count++;
        }
    }

    prepend(value) {
        if (this.head === null) {
            const node = new Node(value);
            this.head = node;
            this.count++;
        }
        else {
            let old = this.head;
            const node = new Node(value, old);
            this.head = node;
            this.count++;
        }
    }

    size() {
        return this.count;
    }

    Head() {
        if (this.head !== null) {
            return this.head;
        }
    }

    tail(){
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        return current
    }

    at(index) {
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    
    pop() {
        if (this.head == null) {
            return 'Likedlist has no nodes'
        }
        else {
            let current = this.head
            let prev = current
            while (current.next != null) {
                prev = current
                current = current.next
            }
            prev.next = null
            this.count--;
        }
    }

    
    contains(value) {
        if (this.head === null) {
            return 'Linkedlist has no nodes';
        }
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    
    find(value){
        if(this.head==null){
            return 'LinkedList has no nodes'
        }

        let current=this.head
        for(let i=0;i<this.count;i++){
            if(current.value==value){
                return i
            }
            current=current.next
        }
    }

    
    toString(){
        let output=''
        let current=this.head
        while(current!=null){
            output+=`${current.value} ->`
            current=current.next
            
        }
        output+=`null`
        return output
    }

   
    insertAt(value,index){
        if(index>this.count){
            return 'invalid index'
        }
        if (this.head == null)
            return 'LinkedList has no nodes'

        let current=this.head
        let prev=current
        for(let i=0;i<index;i++){
            prev=current
            current=current.next
        }
        const node=new Node(value,current)
        prev.next=node
        this.count++
    }

    
    removeAt(index){
        if(index>this.count){
            return 'invalid index'
        }
        if (this.head == null)
            return 'LinkedList has no nodes'
        
        let current=this.head
        let prev=current

        for(let i=0;i<index;i++){
            prev=current
            current=current.next
        }
        prev.next=current.next
        this.count--;
    }

}



const myList = new LinkedList();


myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.prepend(5)
console.log("Linked list : ",myList.toString());
myList.pop()
console.log("Linked list : ",myList.toString());
myList.insertAt(6,3)
console.log(myList.toString());


console.log("Size of linkelist : ",myList.size());
console.log("Head Node : ",myList.Head());
console.log("Tail Node : ",myList.tail());
console.log("Node at Given index",myList.at(3));

console.log("CHheck whether value in linkedlist : ",myList.contains(3));
console.log("Index of given value in linkedlist : ",myList.find(3));
myList.removeAt(2)
console.log(myList.toString());