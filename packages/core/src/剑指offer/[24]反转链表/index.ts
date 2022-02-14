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


  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
}

/**
 * 思路：
 * 连表翻转，实际上就是需要将对应的值倒置
 * @param head 
 * @returns 
 */
 function reverseList(head: ListNode | null): ListNode | null {
    let pre = null;
    while(head){
        const temp = head.next
        head.next = pre;
        pre = head
        head = temp
    }
    return pre || head
};