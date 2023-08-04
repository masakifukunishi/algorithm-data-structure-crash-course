const hasPathSumHelper = (root: TreeNode | null, targetSum: number, currentSum: number): boolean => {
  if (root === null) return false;
  if (root.left === null && root.right === null) {
    return currentSum + root.val === targetSum;
  }

  const hasLeftPath = hasPathSumHelper(root.left, targetSum, currentSum + root.val);
  if (hasLeftPath) return true;

  const hasRightPath = hasPathSumHelper(root.right, targetSum, currentSum + root.val);
  if (hasRightPath) return true;

  return false;
};

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  return hasPathSumHelper(root, targetSum, 0);
};
