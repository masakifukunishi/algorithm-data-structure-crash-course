class ListNode {
  val: number | null;
  next: ListNode | null;

  constructor(val: number | null = null, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  private head: ListNode;
  private tail: ListNode;
  private length: number;

  constructor(val: number) {
    this.head = new ListNode(val);
    this.tail = this.head;
    this.length = 1;
  }

  get(index: number): number {}

  addAtHead(val: number): void {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  addAtTail(val: number): void {
    const node = new ListNode(val);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    // If index is greater than the length, the node will be appended to the end of list.
    if (index >= this.length) {
      this.addAtTail(val);
      return;
    }
    // If index is negative, the node will be inserted at the first of the list.
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }

    const newNode = new ListNode(val);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    return;
  }

  deleteAtIndex(index: number): void {}

  private traverseToIndex(index: number): ListNode {
    let currentNode: ListNode = this.head;
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
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
