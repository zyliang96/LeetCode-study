/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  const zeroHead = new ListNode(0);
  zeroHead.next = head
  let curNode = zeroHead;
  // 这种题要画图，画图才能看明白
  while (curNode.next !== null && curNode.next.next !== null) {
    const temp = curNode.next;
    const nextTemp = curNode.next.next.next;
    curNode.next = curNode.next.next;
    curNode.next.next = temp
    temp.next = nextTemp
    curNode = temp
  }
  return zeroHead.next
};
// @lc code=end

