/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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
 * 后序遍历是 左右中
 * @param root 
 * @returns 
 */
function postorderTraversal(root: TreeNode | null): number[] {
  let list = []

  // TODO 递归调用
  // function traversal(treeNode) {
  //   if (treeNode) {
  //     traversal(treeNode.left)
  //     traversal(treeNode.right)
  //     list.push(treeNode.val)
  //   }
  // }
  // traversal(root)

  // TODO 迭代法


  function traversal(nodeList) {
    // 这个方法处理完，实际结果是中右左，对结果翻转一下，就成后续遍历了
    while (nodeList.length) {
      const data = nodeList.pop()
      if (data) {
        list.push(data.val)
        if (data.left) {
          nodeList.push(data.left)
        }
        if (data.right) {
          nodeList.push(data.right)
        }
      }
    }
  }

  function reverse(s, i, j) {
    while (i <= j) {
      const temp = s[j]
      s[j] = s[i];
      s[i] = temp
      i++;
      j--;
    }
  }
  traversal([root])

  reverse(list, 0, list.length - 1)

  return list
};
// @lc code=end

