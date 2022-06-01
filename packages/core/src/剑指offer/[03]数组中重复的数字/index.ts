// 剑指 Offer 03. 数组中重复的数字
// 找出数组中重复的数字。


// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 


// 限制：

// 2 <= n <= 100000

function findRepeatNumber(nums: number[]): number {
  // 哈希表
  // let map = {};
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   if (map[nums[i]]) {
  //     return nums[i]
  //   } else {
  //     map[nums[i]] = 1
  //   }
  // }

  // 因为长度为n的数组，nums的所有数字都在0 ~ n-1 的范围内，所以如果出现nums[nums[i]] = nums[i] 就说明出现重复
  let i = 0, len = nums.length;
  while (i < len) {
    if (nums[i] === i) {
      i++
      continue
    }
    if (nums[nums[i]] === nums[i]) {
      return nums[i]
    } else {
      const temp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = temp
    }
  }
};


console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))

