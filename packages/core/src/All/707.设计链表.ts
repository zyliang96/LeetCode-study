/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */
class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
class MyLinkedList {
  // 大小
  private size: number;
  // 首链表
  private head: ListNode;
  // 尾链表
  private tail: ListNode;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1
    }
    let node: ListNode = this.getNode(index)
    return node.val
  }

  addAtHead(val: number): void {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    // 这里是判断，如果没有尾结点的时候，说明是第一个新增的，这个时候需要将首尾都添加
    if (!this.tail) {
      this.tail = newNode
    }
    this.size++
  }

  addAtTail(val: number): void {
    const newNode = new ListNode(val);
    // 判断是否有尾结点，有的直接添加，没有的首次添加，要让首节点也指向该节点
    if (this.tail) {
      this.tail.next = newNode
    } else {
      this.head = newNode
    }
    this.tail = newNode;
    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index === this.size) {
      this.addAtTail(val);
      return
    }
    if (index > this.size) {
      return
    }

    if (index <= 0) {
      this.addAtHead(val)
      return
    }
    const indexNode = this.getNode(index - 1);
    const newNode = new ListNode(val, indexNode.next);
    indexNode.next = newNode
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    // 处理头结点
    if (index === 0) {
      this.head = this.head!.next
      this.size--
      if (this.size === 0) {
        this.tail = null
      }
      return
    }

    let indexNode = this.getNode(index - 1);
    indexNode.next = indexNode.next!.next;
    // 处理尾节点
    if (index === this.size - 1) {
      this.tail = indexNode;
    }
    this.size--
  }

  /**
   * 获取对应节点
   * @param index 
   * @returns 
   */
  private getNode(index: number): ListNode {
    // 这里不存在没办法获取到节点的情况，都已经在前置方法做过判断
    // 创建虚拟头节点
    let curNode: ListNode = new ListNode(0, this.head);
    for (let i = 0; i <= index; i++) {
      // 理论上不会出现 null
      curNode = curNode.next!;
    }
    return curNode;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

