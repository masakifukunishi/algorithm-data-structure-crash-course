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

  constructor(val: number) {
    this.head = new ListNode(val);
    this.tail = this.head;
  }

  get(index: number): number {}

  addAtHead(val: number): void {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
  }

  addAtTail(val: number): void {
    const node = new ListNode(val);
    this.tail.next = node;
    this.tail = node;
  }

  addAtIndex(index: number, val: number): void {
    const learned = this.traverseToIndex(index - 1);
  }

  deleteAtIndex(index: number): void {}

  private traverseToIndex(index: number): ListNode | null {
    let currentNode: ListNode | null = this.head;
    let counter = 0;
    while (currentNode !== null && counter !== index) {
      currentNode = currentNode.next;
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
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
