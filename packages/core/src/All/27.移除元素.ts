/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * 首尾指针的方法
 * @param nums 
 * @param val 
 * @returns 
 */
function removeElementStartAndEnd(nums: number[], val: number): number {
  const len = nums.length;
  let left = 0, right = len - 1;
  while (left <= right) {
    if (nums[left] === val) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp
      right--
    } else {
      left++
    }
  }
  return left
};

/**
 * 快慢指针
 * @param nums 
 * @param val 
 * @returns 
 */
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let left = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      if (left !== i) {
        nums[left] = nums[i]
      }
      left++
    }
  }
  return left
};
// @lc code=end

