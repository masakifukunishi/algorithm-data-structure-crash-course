class LinkedListNode {
  val: number | null;
  next: LinkedListNode | null;

  constructor(val: number | null = null, next: LinkedListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyQueue {
  private head: LinkedListNode | null;
  private tail: LinkedListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value: number) {
    const newNode = new LinkedListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue(): number | null {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.tail = null;
    }
    const holdingPointer = this.head;
    this.head = this.head.next;
    this.length--;
    return holdingPointer.val;
  }

  peek(): number | null {
    if (!this.head) return null;
    return this.head.val;
  }

  size(): number {
    return this.length;
  }
}

class RecentCounter {
  private requests: MyQueue;

  constructor() {
    this.requests = new MyQueue();
  }

  ping(t: number): number {
    this.requests.enqueue(t);
    while (this.requests.peek()! < t - 3000) {
      this.requests.dequeue();
    }
    return this.requests.size();
  }
}

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));
