class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    // Insert at the beginning
    insertFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Insert at the end
    insertEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Insert at a specific index
    insertAt(data, index) {
        if (index < 0 || index > this.size()) {
            console.error('Invalid index');
            return;
        }

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        if (index === this.size()) {
            this.insertEnd(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        newNode.prev = current;
        if (current.next) {
            current.next.prev = newNode;
        }
        current.next = newNode;
    }

    // Get the size of the list
    size() {
        let length = 0;
        let current = this.head;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }

    // Remove the first node
    removeFirst() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }

    // Remove the last node
    removeLast() {
        if (!this.tail) return;

        if (!this.head.next) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    // Remove at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            console.error('Invalid index');
            return;
        }

        if (index === 0) {
            this.removeFirst();
            return;
        }

        if (index === this.size() - 1) {
            this.removeLast();
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.prev.next = current.next;
        if (current.next) {
            current.next.prev = current.prev;
        }
    }

    // Print the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    printBackward() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.prev;
        }
        console.log(result + 'null');
    }
}

// Example usage
const dll = new DoublyLinkedList();
dll.insert(10);
dll.insert(20);
dll.insert(30);
dll.insert(40);
dll.print();
dll.printBackward();
dll.insertFirst(5);
dll.insertEnd(50);
dll.insertAt(25,3);
dll.print();
dll.removeAt(1);
dll.removeFirst();
dll.removeLast();
dll.print();
dll.printBackward();
