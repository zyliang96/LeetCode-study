/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  let list = [];
  if (root) {
    list.push(root)
  }
  while (list.length) {
    let len = list.length;
    let temp = null
    for (let i = 0; i < len; i++) {
      const data = list.shift();
      // console.log(temp, data)
      if (i !== 0) {
        temp.next = data
      }
      temp = data
      if (data.left) {
        list.push(data.left);
      }
      if (data.right) {
        list.push(data.right);
      }
    }
  }
  return root
};
// @lc code=end

