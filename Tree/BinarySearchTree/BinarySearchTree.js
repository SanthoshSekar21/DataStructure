class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (data === current.data) return 'Node already exists in the tree';
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(data) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found ? current : `${data} not found in the tree`;
    }

    contain(data) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(current, data) {
        if (!current) return null;
        if (data < current.data) {
            current.left = this.removeNode(current.left, data);
        } else if (data > current.data) {
            current.right = this.removeNode(current.right, data);
        } else {
            if (!current.left) return current.right;
            if (!current.right) return current.left;
            let successor = this.findMin(current.right);
            current.data = successor.data;
            current.right = this.removeNode(current.right, successor.data);
        }
        return current;
    }

    findMin(current) {
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    // In-order Traversal (Left, Root, Right)
    inOrderTraversal(current = this.root, result = []) {
        if (current) {
            this.inOrderTraversal(current.left, result);
            result.push(current.data);
            this.inOrderTraversal(current.right, result);
        }
        return result;
    }

    // Pre-order Traversal (Root, Left, Right)
    preOrderTraversal(current = this.root, result = []) {
        if (current) {
            result.push(current.data);
            this.preOrderTraversal(current.left, result);
            this.preOrderTraversal(current.right, result);
        }
        return result;
    }

    // Post-order Traversal (Left, Right, Root)
    postOrderTraversal(current = this.root, result = []) {
        if (current) {
            this.postOrderTraversal(current.left, result);
            this.postOrderTraversal(current.right, result);
            result.push(current.data);
        }
        return result;
    }

    // Print the tree structure
    printTree(current = this.root, prefix = '', isLeft = true) {
        if (current !== null) {
            console.log(prefix + (isLeft ? '|-- ' : 'L-- ') + current.data);
            this.printTree(current.left, prefix + (isLeft ? '│   ' : '    '), true);
            this.printTree(current.right, prefix + (isLeft ? '│   ' : '    '), false);
        }
    }
}

// Example Usage
const bst = new BinarySearchTree();
bst.add(50);
bst.add(25);
bst.add(75);
bst.add(10);
bst.add(35);
bst.add(60);
bst.add(85);

console.log("Binary Search Tree Structure:");
bst.printTree();

console.log("In-order Traversal: ", bst.inOrderTraversal()); // [10, 25, 35, 50, 60, 75, 85]
console.log("Pre-order Traversal: ", bst.preOrderTraversal()); // [50, 25, 10, 35, 75, 60, 85]
console.log("Post-order Traversal: ", bst.postOrderTraversal()); // [10, 35, 25, 60, 85, 75, 50]
console.log(bst.find(50));
console.log(bst.contain(25));
bst.remove(25);
console.log("After removing 25:");
bst.printTree();
