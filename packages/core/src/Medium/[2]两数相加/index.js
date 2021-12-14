/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let start = null 
    let end = null
    let nextIndex = 0;
    // 遍历链表，然后将链表的值和进位值相加，当前链表位置的val为模10取余的值，进位为sum / 10 取整
    while(l1 || l2){
        const value1 = l1 ? l1.val : 0; 
        const value2 = l2 ? l2.val : 0;
        const sum = value1 + value2 + nextIndex; 
        if(start){
            end.next = new ListNode(sum % 10)
            end = end.next
        }else{
            start = end = new ListNode(sum % 10)
        }
        nextIndex = Math.floor(sum / 10);
        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
    }
    if(nextIndex > 0){
        end.next =  new ListNode(nextIndex)
    }
    return start
};