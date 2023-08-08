
# Tree
## What
A tree is **Graph with no cycles**

    - Nodes : V

    - edges : V - 1

## Why
### Tree usages
    - Hierarchical relationships
  
    - Manage sorted data

    - Enable fast searching operations

## Terms
### Root
The topmost node that has no parent.

### Parent
A node that is connected directly above another node in the hierarchy.

### Children
A node that is connected directly below another node in the hierarchy.

### Ancestor
A node that is connected above another node in the hierarchy.

### Descendent
A node that is connected below another node in the hierarchy.

### Siblings
A node that has the same parent as another node.

### Leaf
A node that has no children.

### Depth
The number of edges from the root to the node.

### Height (max Depth)
The number of edges from the node to the deepest leaf.

## Type of trees
- Binary Tree
    - Variations [Different Types of Binary Tree with colourful illustrations](https://towardsdatascience.com/5-types-of-binary-tree-with-cool-illustrations-9b335c430254)
    - Binary Search Tree (BST)
- Ternary Tree
- N-ary Tree


## How do we represent trees?

### Using Nodes

A tree is composed of nodes, and each node has pointers to its child nodes. Each node can have multiple children, and the tree structure is defined by the connections between nodes.

### Using an Array
A tree can also be represented by an array. The root node is the first element in the array. The next two elements of the array represent the children of the root node. The next four elements of the array represent the four children of the two nodes directly above them. This pattern continues throughout the array.

## Traversal Algorithm

### Depth-First Search (DFS) Algorithm
DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking.

### Breadth-First Search (BFS) Algorithm
BFS is a  traversal algorithm that visits all the nodes at the current depth level before moving to nodes at the next depth level.

## Tree Traversal
### Achieved by DFS
- Pre-Order
    - 1st time you visit
    - "Root", Left, Right

- In-Order
    - 2nd time you visit
    - Left, "Root",  Right

- Post-Order
    - 3rd time you visit
    - Left,  Right,  "Root"

https://www.youtube.com/watch?v=WLvU5EQVZqY

### Achieved by BFS
- Level-Order

[4 Types of Tree Traversal Algorithms](https://towardsdatascience.com/4-types-of-tree-traversal-algorithms-d56328450846) 

# Exercise

### dfs
- https://leetcode.com/problems/path-sum/
```ts
const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  const dfs = (root: TreeNode | null, currentSum: number): boolean => {
    if (root === null) return false;
    if (root.left === null && root.right === null) {
      return currentSum + root.val === targetSum;
    }
    return dfs(root.left, currentSum + root.val) || dfs(root.right, currentSum + root.val)
  };
  return dfs(root, 0);
};
```

- https://leetcode.com/problems/binary-tree-inorder-traversal/
```ts
const inorderTraversal = (root: TreeNode | null): number[] =>{
  const result: number[] = [];
  const traverse = (node: TreeNode | null) => {
    if (node === null) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root)
  return result
};
```

- https://leetcode.com/problems/maximum-depth-of-binary-tree/
```ts
const maxDepth = (root: TreeNode | null): number => {
  let max = 0;
  const dfs = (root: TreeNode | null, currentDepth: number): void => {
    if (!root) {
      max = Math.max(max, currentDepth);
      return;
    }
    dfs(root.left, currentDepth + 1);
    dfs(root.right, currentDepth + 1);
  };
  dfs(root, 0);
  return max;
};
```

### bfs

#### Queue for BFS
```ts
class LinkedListNode {
  val: TreeNode | null;
  next: LinkedListNode | null;

  constructor(val: TreeNode | null = null, next: LinkedListNode | null = null) {
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

  enqueue(value: TreeNode) {
    const newNode = new LinkedListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (!this.tail) throw new Error("Unexpected: The tail is null.");
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue(): TreeNode | null {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.tail = null;
    }
    const holdingPointer = this.head;
    this.head = this.head.next;
    this.length--;
    return holdingPointer.val;
  }

  peek(): TreeNode | null {
    if (!this.head) return null;
    return this.head.val;
  }

  size(): number {
    return this.length;
  }
}
```

- https://leetcode.com/problems/minimum-depth-of-binary-tree/
```ts
const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  let queue = new MyQueue();
  queue.enqueue(root);
  let depth = 0;

  while (queue.size() > 0) {
    depth++;
    const levelSize = queue.size();
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.dequeue();

      if (!currentNode) throw new Error("Unexpected: The node is null.");

      if (currentNode.left === null && currentNode.right === null) {
        return depth;
      }
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
  }
  return depth;
};
```

- https://leetcode.com/problems/maximum-depth-of-binary-tree/
```ts
const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  let queue = new MyQueue();
  queue.enqueue(root);
  let depth = 0;

  while (queue.size() > 0) {
    depth++;
    const levelSize = queue.size();
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.dequeue();
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
  }
  return depth;
};
```

- https://leetcode.com/problems/average-of-levels-in-binary-tree/
```ts
const averageOfLevels = (root: TreeNode | null): number[] => {
  if (!root) return [];
  let queue = new MyQueue();
  queue.enqueue(root);
  let results = [];

  while (queue.size() > 0) {
    const levelList = []
    const levelSize = queue.size();
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.dequeue();
      levelList.push(currentNode.val)
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
    const levelSum = levelList.reduce((acc, val) => acc + val, 0);
    const average = levelSum / levelList.length;
    results.push(average)
  }
  return results;
};
```
