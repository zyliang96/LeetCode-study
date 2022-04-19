/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

/**
 * 判断链表是否为环，需要用快慢指针，一个一次走两步，一个一次走一步，如果两个有交集，则说明成环
 * @param head 
 */
function detectCycle(head: ListNode | null): ListNode | null {
  let slowNode = head;
  let fastNode = head;
  while (fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    // 这个时候说明成环了
    if (slowNode === fastNode) {
      slowNode = head;
      // 都一步一步的走，找到第一个
      while (fastNode !== slowNode) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
      }
      return slowNode
    }
  }
  return null
};
// @lc code=end

