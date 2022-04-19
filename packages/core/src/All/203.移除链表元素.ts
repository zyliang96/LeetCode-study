/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 去除首节点，然后找到头结点
  while (head !== null && head.val === val) {
    head = head.next
  }
  if (head === null) {
    return head
  }
  let pre = head
  // 去除非头节点的，这里要考虑连续相等的情况
  while (pre && pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next
    } else {
      pre = pre.next
    }
  }
  return head
};
// @lc code=end

