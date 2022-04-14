/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start

// 题目中的有序数组很关键
/**
 * 
 * @param nums 
 */
function removeDuplicates(nums: number[]): number {
  let len = nums.length;
  let left = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[left]) {
      if ((i - left) > 1) {
        nums[++left] = nums[i]
      } else {
        left++;
      }
    }
  }
  return left + 1
};

// @lc code=end

