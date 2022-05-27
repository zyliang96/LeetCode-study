// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

//  

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]
//  

// 限制：

// 0 <= 链表长度 <= 10000


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
// 链表从尾到头返回每个节点，实际上就是将前面的数据从头部塞入
function reversePrint(head: ListNode | null): number[] {
  let result = []
  while (head && (head.val || head.val === 0)) {
    result.unshift(head.val)
    head = head.next
  }
  return result
};