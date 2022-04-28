/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * 这样写应该就是map获取大小，然后排序一下，时间复杂度在O(nlogn)
 * @param nums 
 * @param k 
 * @returns 
 */
// function topKFrequent(nums: number[], k: number): number[] {
//   let map = {};
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (map[nums[i]]) {
//       map[nums[i]] += 1
//     } else {
//       map[nums[i]] = 1
//     }
//   }
//   const list = Object.keys(map).sort((a, b) => {
//     return map[b] - map[a]
//   })
//   let result = []
//   // console.log(list)
//   for (let i = 0; i < k; i++) {
//     result.push(Number(list[i]))
//   }
//   return result
// };

/**
 * 通过最小堆的形式保存k个大小的数据，然后将数据返回
 * @param nums 
 * @param k 
 * @returns 
 */
function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map();
  let heapList = new Heap()
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  // console.log(map)
  map.forEach((val, key) => {
    if (heapList.size < k) {
      heapList.push({
        val,
        key
      })
    } else {
      if (heapList.top().val < val) {
        heapList.list[1] = {
          val,
          key
        }
        heapList.down(1)
      }
    }
  })

  // 这里可以由堆提供推出堆顶元素的方法，进行遍历，但是堆顶元素调整之后需要调整堆的
  let result = []
  heapList.list.forEach((item) => {
    if (item) {
      result.push(item.key)
    }
  })
  return result
};

class Heap {
  list: any[];
  count: number;
  constructor() {
    this.list = [];
    this.count = 0
  }

  get size() {
    return this.count
  }

  push(item) {
    this.list[++this.count] = item;
    this.up(this.count)
  }

  exchange(i, j) {
    const temp = this.list[j];
    this.list[j] = this.list[i];
    this.list[i] = temp
  }


  /**
   * 上浮
   */
  up(index) {
    while (index > 1 && this.list[index >> 1].val > this.list[index].val) {
      this.exchange(index, index >> 1)
      index = index >> 1
    }
  }

  /**
   * 下沉
   */
  down(index) {
    const len = this.list.length
    // console.log(index, len, )
    while (index * 2 < len) {
      let left = index * 2;
      // console.log(this.list[left], this.list[left + 1], index)
      if (left < len && this.list[left + 1] && this.list[left].val > this.list[left + 1].val) {
        left++;
      }
      if (!(this.list[index].val > this.list[left].val)) {
        break;
      }
      this.exchange(index, left)
      index = left
    }
  }

  top() {
    if (this.count) {
      return this.list[1]
    }
    return null
  }
}
// console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
// @lc code=end

