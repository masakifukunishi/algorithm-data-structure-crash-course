class ListNode {
  val: number | null;
  next: ListNode | null;

  constructor(val: number | null = null, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyQueue {
  private first: ListNode | null;
  private last: ListNode | null;
  private length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value: number) {
    const newNode = new ListNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue(): number | null {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer.val;
  }

  peek(): number | null {
    if (!this.first) return null;
    return this.first.val;
  }

  size(): number {
    return this.length;
  }
}

const myQueue = new MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); // 1
console.log(myQueue.peek()); // 2
console.log(myQueue.size()); // 2
console.log(myQueue);
