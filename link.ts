class LinkedListNode {
  val: number | null;
  next: LinkedListNode | null;

  constructor(val: number | null = null, next: LinkedListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  private head: LinkedListNode;
  private tail: LinkedListNode;
  private length: number;

  constructor(val: number) {
    this.head = new LinkedListNode(val);
    this.tail = this.head;
    this.length = 1;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    const leader = this.traverseToIndex(index);
    return leader.val!;
  }

  addAtHead(val: number): void {
    const node = new LinkedListNode(val);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  addAtTail(val: number): void {
    const node = new LinkedListNode(val);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    const newNode = new LinkedListNode(val);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    return;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode!.next;
    this.length--;
  }

  private traverseToIndex(index: number): LinkedListNode {
    let currentNode: LinkedListNode = this.head;
    let counter = 0;
    while (currentNode !== null && counter !== index) {
      currentNode = currentNode.next!;
      counter++;
    }
    return currentNode;
  }
}

const linkedList = new MyLinkedList(2);
console.log(linkedList);
linkedList.addAtHead(1);
console.log(linkedList);
linkedList.addAtTail(3);
console.log(linkedList);
linkedList.addAtIndex(2, 4);
console.log(linkedList);
linkedList.deleteAtIndex(1);
console.log(linkedList);
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
