/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0, j = 0, len = nums.length;
  while (i < len) {
    if (nums[i] !== 0) {
      if (i !== j) {
        const temp = nums[j]
        nums[j] = nums[i];
        nums[i] = temp
      }
      i++
      j++;
    } else {
      i++
    }
  }
};

// moveZeroes([0, 1, 0, 3, 12])
// @lc code=end

