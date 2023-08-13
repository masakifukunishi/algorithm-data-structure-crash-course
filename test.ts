/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // 両方のノードがnullの場合、同じとみなす
  if (!p && !q) {
    return true;
  }

  // 片方のノードがnullの場合、異なるとみなす
  if (!p || !q) {
    return false;
  }

  // ノードの値が異なる場合、異なるとみなす
  if (p.val !== q.val) {
    return false;
  }

  // 左右のサブツリーも同じかどうか再帰的に判定
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
