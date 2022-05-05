/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
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

function isBalanced(root: TreeNode | null): boolean {
  /**
   * 这道题的关键实际上就在于对于高度的计算，递归计算的时候，先计算叶子节点的高度，然后就可以得出父节点的高度（在子节点的高度上加1）
   * 所以这道题实际上是深度优先搜索遍历
   * @param node 
   * @returns 
   */
  function getHeight(node) {
    if (node === null) {
      return 0
    }
    let leftHeight = getHeight(node.left);
    if (leftHeight === -1) {
      return -1
    }
    let rightsHeight = getHeight(node.right);
    if (rightsHeight === -1) {
      return -1
    }

    if (Math.abs(leftHeight - rightsHeight) > 1) {
      return -1
    } else {
      return 1 + Math.max(leftHeight, rightsHeight)
    }
  }
  return getHeight(root) === -1 ? false : true
};
// @lc code=end

