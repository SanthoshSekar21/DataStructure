class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the beginning
    insertFirst(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at the end
    insertEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Insert at a specific index
    addAt(value, index) {
        if (index < 0 || index > this.size()) {
            console.error('Invalid Index');
            return;
        }

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    // Get the size of the list
    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    // Remove the first node
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    // Remove the last node
    removeLast() {
        if (!this.head) return;

        // If there's only one node
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            console.error('Invalid Index');
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;
    }

    // Delete a node with a specific value
    delete(data) {
        if (!this.head) {
            return;
        }

        // If the node to be deleted is the head
        if (this.head.value === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current) {
            if (current.value === data) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    // Print the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    reverse(head){
        let previous=null;
        let current=this.head;
        while(current!=null){
            const newNode=current.next;
            current.next=previous;
            previous=current;
            current=newNode;
        }
        this.head = previous;
    }
        clearList(head)
        {  
            this.head=null;
            return 'list is clearead';
        }
    }


// Example usage
const sLL = new SinglyLinkedList();
sLL.insertFirst(10);
sLL.insertFirst(20);
sLL.insertEnd(30);
sLL.print();
sLL.reverse(20);

sLL.addAt(25, 1);
sLL.print(); // Output: 20 -> 25 -> 10 -> 30

console.log("Size:", sLL.size()); // Output: 4
sLL.removeFirst();
sLL.print(); // Output: 25 -> 10 -> 30

sLL.removeLast();
sLL.print(); // Output: 25 -> 10

sLL.removeAt(1);
sLL.print(); // Output: 25

// Deleting a node with value 10
sLL.delete(25);

sLL.insertEnd(20);
sLL.print(); // Output: (empty)
console.log(sLL.clearList(20));
sLL.print();
