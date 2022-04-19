/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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
 * 有个很好的想法，双指针，一个链表循环结束了，则循环另一个链表，假设链表A，分为不同部分a 和相同部分c 。链表B，分为不同部分b 和相同部分c
 * a+c+b   === b+ c + a 说明相交，如果
 * 
 * @param headA 
 * @param headB 
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null
  }
  let pA = headA, pB = headB;
  // a 和 b 两个链表中任意一个遍历结束了,这里实际上比对的是地址，所以，当循环 pA长度 + pB长度之后，两个都为null，这个时候如果没有匹配到也不会再匹配到
  // 如果长度一样，没有匹配到，说明不相交
  // 如果长度不一样，遍历pA长度 + pB长度后，此时pA和pB都是null，则不相交
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
};

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

// function createListNode(list) {
//   let head = null
//   for (let i = list.length - 1; i >= 0; i--) {
//     const node = new ListNode(list[i], head)
//     head = node
//   }
//   return head
// }


// console.log(getIntersectionNode(createListNode([1,2,3,4,5,6,7,8]),createListNode([10,5,6,7,8])))
// @lc code=end

// 