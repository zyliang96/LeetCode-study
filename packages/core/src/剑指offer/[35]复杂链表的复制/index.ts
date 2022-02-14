/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * 哈希表的形式
 * @param head
 * @param cachedNode
 * @returns
 */
// var copyRandomList = function (head, cachedNode = new Map()) {
//     if (head === null) {
//         return null;
//     }
//     if (!cachedNode.has(head)) {
//         cachedNode.set(head, { val: head.val }),
//             Object.assign(cachedNode.get(head), {
//                 next: copyRandomList(head.next, cachedNode),
//                 random: copyRandomList(head.random, cachedNode)
//             });
//     }
//     return cachedNode.get(head);
// };


/**
 * 这个想法很巧妙，将新节点插入到了当前列表中
 * @param head 
 * @param cachedNode 
 * @returns 
 */
var copyRandomList = function (head) {
    if (head === null) {
        return null;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = new Node(node.val, node.next, null);
        node.next = nodeNew;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = node.next;
        nodeNew.random = node.random !== null ? node.random.next : null;
    }
    const headNew = head.next;
    for (let node = head; node !== null; node = node.next) {
        const nodeNew = node.next;
        node.next = node.next.next;
        nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null;
    }
    return headNew;
};
