/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  let list = [];
  // 这个回溯有一点不太一样，在往常的回溯中，1、终止条件 2、递归调用
  function dfs(node, temp = []) {
    temp.push(node.val);
    // 只有当前节点是叶子节点的时候，才进行插入值，否则会导致跳跃计算
    if (node.left === null && node.right === null) {
      list.push(temp.join('->'))
      return
    }
    /**
     * 如果左节点存在，则需要递归左节点，
     */
    if (node.left) {
      dfs(node.left, temp);
      temp.pop();
    }

    /**
     * 如果右节点存在，则需要递归右节点
     */
    if (node.right) {
      dfs(node.right, temp);
      temp.pop();
    }


  }
  if (root === null) {
    return []
  }
  dfs(root, [])
  return list
};
// @lc code=end

