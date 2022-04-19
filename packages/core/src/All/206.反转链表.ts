/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  // 递归（从前往后）
  // function reverse(pre, cur) {
  //   if (cur === null) return pre
  //   const temp = cur.next;
  //   cur.next = pre;
  //   return reverse(cur, temp)
  // }
  // return reverse(null, head)

  // 递归（从后往前）
  // if (head === null) {
  //   return null
  // }
  // let newNode = null
  // function reverse(node, preNode) {
  //   if (node.next === null) {
  //     newNode = node
  //     newNode.next = preNode
  //   } else {
  //     reverse(node.next, node);
  //     node.next = preNode
  //   }
  // }
  // reverse(head, null)
  // return newNode


  let preNode = null;
  let curNode = head;
  let tempNode = null;
  while (curNode) {
    tempNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = tempNode
  }
  return preNode
};
// @lc code=end

