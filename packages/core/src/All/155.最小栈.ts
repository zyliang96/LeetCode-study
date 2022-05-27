/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start

/**
 * 使用了两个栈来进行操作，所以会存在偏移问题
 */
// class MinStack {
//   stack1: number[] = []; // 主栈
//   stack2: number[] = []; // 辅助栈，记录最小值排序
//   constructor() {

//   }

//   push(x: number): void {
//     const len = this.stack2.length
//     const item = len ? this.stack2[len - 1] : null
//     this.stack1.push(x)
//     // 如果输入的元素比辅助栈顶元素小，则插入辅助栈，说明当前最小的栈中元素是新插入的这个值
//     if ((!item && item !== 0) || x <= item) {
//       this.stack2.push(x)
//     } else {
//       // TODO 这里加了设置重复值的逻辑，主要是为了保证在存在重复数据的情况下，保证准确
//       this.stack2.push(item)
//     }
//     // console.log(this.stack2)
//   }

//   pop(): void {
//     const len = this.stack2.length
//     const target = len ? this.stack2[len - 1] : null
//     const item = this.stack1.pop();
//     // TODO 如果值和辅助栈顶元素一致，则辅助栈需要出栈操作，这样写有个问题就是在存在重复数据的时候，可能导致提前出栈从而出错
//     // if ((target || target === 0) && target === item) {
//     //   this.stack2.pop()
//     // }
//     this.stack2.pop()
//   }

//   top(): number {
//     const len = this.stack1.length
//     if (len || len === 0) {
//       return this.stack1[len - 1]
//     } else {
//       return null
//     }
//   }

//   getMin(): number {
//     const len = this.stack2.length
//     const target = len ? this.stack2[len - 1] : null
//     return target
//   }
// }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/**
 * 利用一个栈来存储，那么存储的只能是与当前最小值的差值，这样才能够记录有效数据，
 */
class MinStack {
  stack1: number[] = []; // 主栈
  min: number; 最小值
  constructor() {

  }

  push(x: number): void {
    // 第一次的时候，设置min然后入栈，后续的计算min和当前值的差值，然后判断差值是否小于0，如果小于0，说明x比min更小，所以min赋值为x，否则还是当前min
    if (this.stack1.length === 0) {
      this.min = x;
      this.stack1.push(0)
    } else {
      const differ = x - this.min;
      this.stack1.push(differ);
      if (differ < 0) {
        this.min = x
      }
    }
  }

  pop(): void {
    const item = this.stack1.pop();
    if (item && item < 0) {
      // item =  x - lastMin; 
      // min = x;
      // lastMin = min - item
      this.min = this.min - item
    }
  }

  top(): number {
    const len = this.stack1.length;
    const item = this.stack1[len - 1];
    // 栈顶元素如果< 0 ，说明 x - min < 0 ,此时 x 更小，会复制给min，如果x - min > 0 此时min更小，所以 x = min + item
    if (item < 0) {
      return this.min
    }
    return this.min + item
  }

  getMin(): number {
    return this.min
  }
}

// @lc code=end

