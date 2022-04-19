/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newHead = new ListNode(0, head);
  let slowNode = newHead;
  let fastNode = newHead;

  while (n > 0 && fastNode.next !== null) {
    fastNode = fastNode.next;
    n--;
  }
  while (fastNode.next !== null) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }
  // 执行删除操作
  slowNode.next = slowNode.next.next;
  return newHead.next
};
// @lc code=end

