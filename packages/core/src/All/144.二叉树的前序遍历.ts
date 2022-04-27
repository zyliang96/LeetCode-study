/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
/**
 * 前序遍历是 中左右
 * @param root 
 * @returns 
 */
function preorderTraversal(root: TreeNode | null): number[] {
  let list = []

  // TODO 递归调用,递归调用的本质是深度优先搜索遍历
  // function traversal(treeNode) {
  //   if (treeNode) {
  //     list.push(treeNode.val)
  //     traversal(treeNode.left)
  //     traversal(treeNode.right)
  //   }
  // }
  // traversal(root)

  // TODO  迭代法,迭代法的本质实际上是广度优先搜索遍历，只是加入栈的顺序导致了

  function traversal(nodeList) {
    while (nodeList.length) {
      const data = nodeList.pop()
      if (data) {
        list.push(data.val)
        if (data.right) {
          nodeList.push(data.right)
        }
        if (data.left) {
          nodeList.push(data.left)
        }
      }
    }
  }
  traversal([root])




  return list
};
// @lc code=end

