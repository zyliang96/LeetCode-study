/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  let list = [], result = [];
  if (root) {
    list.push(root);
  }
  while (list.length) {
    let len = list.length
    let temp = [];
    for (let i = 0; i < len; i++) {
      const data = list.shift();
      if (data) {
        temp.push(data.val);
        if (Array.isArray(data.children) && data.children.length) {
          list.push(...data.children);
        }
      }
    }
    if (temp.length) {
      result.push(temp);
    }
  }
  return result
};
// @lc code=end

