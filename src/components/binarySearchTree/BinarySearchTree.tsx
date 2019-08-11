class Node {
    value: number;
    right: Node | null;
    left: Node | null;
    constructor(value: number) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

export default class BinarySearchTree {
    root: Node | null;
    constructor() {
        this.root = null;
    }
    insert(value: number) {
        const insertNode = new Node(value);
        if (this.root === null) {
            this.root = insertNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) return undefined;
            if (currentNode.value > value) {
                if (!currentNode.left) {
                    currentNode.left = insertNode;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            }
            if (currentNode.value < value) {
                if (!currentNode.right) {
                    currentNode.right = insertNode;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}