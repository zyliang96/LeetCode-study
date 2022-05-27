/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  // TODO 方法1，基于哈希表做处理
  // let map = new Map();
  // // 循环
  // function loop(node, map) {
  //   if (!node) {
  //     return null
  //   }
  //   if (!map.has(node)) {
  //     const newNode = new Node(node.val);
  //     map.set(node, newNode);
  //     newNode.next = loop(node.next, map);
  //     newNode.random = loop(node.random, map);
  //   }
  //   return map.get(node)
  // }
  // return loop(head, map)

  // TODO 方法2 在原先的链表上创建新的节点，然后删除掉老节点,优势在于不需要特定的map去存储，并且链表节点之间相对独立，不需要连续的存储空间

  if (!head) {
    return null
  }
  let node = head;
  while (node) {
    const newNode = new Node(node.val, node.next);
    node.next = newNode
    node = node.next.next
  }
  // 先处理random节点
  node = head;
  while (node) {
    const newNode = node.next
    newNode.random = node.random !== null ? node.random.next : null;
    node = node.next.next
  }
  const headNew = head.next;
  node = head;
  while (node) {
    const newNode = node.next;
    // 此时将node.next 指向原来的next节点，所以node.next.next 就是下一个节点的克隆节点
    node.next = node.next.next;
    if (node.next) {
      newNode.next = node.next.next
    }
    node = node.next
  }
  return headNew
};
// @lc code=end

