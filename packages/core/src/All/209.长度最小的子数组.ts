/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLenSelf(target: number, nums: number[]): number {
  let list = [];
  let min = Number.MAX_SAFE_INTEGER, result = 0;
  const len = nums.length;
  let i = 0
  while (i < len) {
    result += nums[i]
    list.push(nums[i])
    if (target <= result) {
      while (target <= result) {
        if (list.length < min) {
          min = list.length;
        }
        const del = list.shift();
        result -= del
      }
    }
    i++;
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min
};

function minSubArrayLen(target: number, nums: number[]): number {
  let start = 0, end = 0;
  let min = Number.MAX_SAFE_INTEGER, result = 0;
  const len = nums.length;
  while (end < len) {
    result += nums[end]
    if (target <= result) {
      while (target <= result) {
        min = Math.min(end - start + 1, min);
        result -= nums[start];
        start++;
      }
    }
    end++;
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min
};
// @lc code=end

