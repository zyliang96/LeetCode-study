/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  let len = nums.length
  let left = 0, right = len - 1;
  let result = []
  while (left <= right) {
    const leftVal = nums[left] * nums[left];
    const rightVal = nums[right] * nums[right];
    if (rightVal > leftVal) {
      result[--len] = rightVal
      right--
    } else {
      result[--len] = leftVal
      left++
    }
  }
  return result
};
// @lc code=end

