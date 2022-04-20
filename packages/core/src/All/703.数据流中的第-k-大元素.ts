/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 */

/**
 * 利用了最小堆
 */
// @lc code=start
class KthLargest {
  private count: number;
  private heap: MinHeap;
  constructor(k: number, nums: number[]) {
    // 根据初始化数据，构建k个的最小堆，然后通过上浮
    this.count = k;
    this.heap = new MinHeap()
    // add实际上维护了一个大小为k的最小堆，所以最小堆实际上只有k个元素，
    for (let i = 0, len = nums.length; i < len; i++) {
      this.add(nums[i])
    }
  }

  add(val: number): number {
    // 添加的时候，如果没有填充满，则继续填充堆，否则，判断插入元素是否大于堆顶元素，大于则覆盖堆顶元素，然后堆下沉，最后得出的堆顶元素就是第k个元素
    if (this.heap.size < this.count) {
      this.heap.add(val)
    } else {
      if (val > this.heap.list[1]) {
        this.heap.list[1] = val;
        this.heap.sink(1)
      }
    }
    return this.heap.list[1]
  }
}


class MinHeap {
  list: number[];
  count: number;
  constructor() {
    this.list = []
    this.count = 0
  }

  get size() {
    return this.count
  }
  exchange(i, j) {
    const temp = this.list[i]
    this.list[i] = this.list[j];
    this.list[j] = temp
  }

  // 上浮
  swim(index) {
    while (index > 1 && this.list[index] < this.list[index >> 1]) {
      this.exchange(index, index >> 1);
      index = index >> 1
    }
  }

  // 下沉
  sink(index) {
    const len = this.list.length
    while (index * 2 < len) {
      let leftNum = index * 2;
      if (leftNum < len && this.list[leftNum] > this.list[leftNum + 1]) {
        leftNum++
      }
      if (!(this.list[index] > this.list[leftNum])) {
        break
      }
      this.exchange(index, leftNum)
      index = leftNum
    }
  }
  isEmpty(): boolean {
    return this.count === 0;
  }

  add(val: number) {
    this.list[++this.count] = val;
    this.swim(this.count)
  }

  top() {
    if (this.count) {
      return this.list[1]
    }
    return null
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

