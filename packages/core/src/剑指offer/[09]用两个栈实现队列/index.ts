// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

//  

// 示例 1：

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]
// 示例 2：

// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]
// 提示：

// 1 <= values <= 10000
// 最多会对 appendTail、deleteHead 进行 10000 次调用


/**
 * 两个栈实现一个队列的原理实际上
 */
class CQueue {
  stack1: number[] = [];
  stack2: number[] = []
  constructor() {

  }

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(): number {
    // 删除的时候，如果第二个栈为空，那么就将栈1的数据塞入到栈二中，这样，栈1中的数据就倒序到了栈二，从而实现队列效果
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    if (!this.stack2.length) {
      return -1
    } else {
      const item = this.stack2.pop()
      return item
    }
  }
}



/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */