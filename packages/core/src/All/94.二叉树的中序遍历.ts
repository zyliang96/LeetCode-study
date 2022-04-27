/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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
 * 中序遍历 左中右
 * @param root 
 */
function inorderTraversal(root: TreeNode | null): number[] {
  let list = []

  /**
   * 递归调用 
   * 递归调用的本质是深度优先搜索遍历
   * @param treeNode 
   */
  // function traversal(treeNode) {
  //   if (treeNode) {
  //     traversal(treeNode.left)
  //     list.push(treeNode.val)
  //     traversal(treeNode.right)
  //   }
  // }
  // traversal(root)

  /**
   * TODO 中序遍历的迭代法不一样，因为中序遍历操作的节点和访问顺序不一样的
   */

  function traversal(curNode, nodeList) {
    while (curNode || nodeList.length) {
      // 如果存在节点就一直设置左节点
      if (curNode) {
        nodeList.push(curNode)
        curNode = curNode.left
      } else {
        // 否则退出栈顶元素，然后设置右侧元素
        curNode = nodeList.pop()
        list.push(curNode.val);
        curNode = curNode.right
      }
    }
  }
  // 这里的数组一定要注意，由于root是第一个，所以会默认设置进栈
  traversal(root, [])

  return list
};
// @lc code=end

