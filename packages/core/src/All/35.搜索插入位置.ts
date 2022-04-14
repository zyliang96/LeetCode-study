/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  const len = nums.length;
  let left = 0, right = len - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (target > nums[right]) {
      return right + 1
    }

    if (target < nums[left]) {
      return left
    }
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid
    }
  }
};

// @lc code=end

