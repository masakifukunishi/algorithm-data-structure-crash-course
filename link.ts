class LinkedListNode {
  val: number | null;
  next: LinkedListNode | null;

  constructor(val: number | null = null, next: LinkedListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  private head: LinkedListNode | null;
  private tail: LinkedListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    const leader = this.traverseToIndex(index);
    return leader!.val!;
  }

  addAtHead(val: number): void {
    const node = new LinkedListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  addAtTail(val: number): void {
    const node = new LinkedListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.length) {
      this.addAtTail(val);
      return;
    }

    const newNode = new LinkedListNode(val);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader!.next;
    leader!.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.head = this.head!.next;
      if (this.head === null) {
        this.tail = null;
      }
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader!.next;
      leader!.next = unwantedNode!.next;
      if (unwantedNode === this.tail) {
        this.tail = leader;
      }
    }

    this.length--;
  }

  private traverseToIndex(index: number): LinkedListNode | null {
    let currentNode: LinkedListNode | null = this.head;
    let counter = 0;
    while (currentNode !== null && counter !== index) {
      currentNode = currentNode.next!;
      counter++;
    }
    return currentNode;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
