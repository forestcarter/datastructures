class Node {
    nodeId: number;
    filmName: string;
    next: any;
    constructor(nodeId: number, filmName: string) {
        this.nodeId = nodeId;
        this.filmName = filmName;
        this.next = null;
    }
}

export default class SinglyLinkedList {
    head: any;
    tail: any;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(nodeId: number, filmName: string) {
        var newNode = new Node(nodeId, filmName);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (this.head === null) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = newTail;
            this.tail.next = null;
        }
        return current;
    }
}
