/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  let list = [];
  let windowList = []
  for (let i = 0, len = nums.length; i < len; i++) {
    while (windowList.length && nums[i] > nums[windowList[windowList.length - 1]]) {
      windowList.pop()
    }
    windowList.push(nums[i])
    if (windowList[0] <= i - k) {
      windowList.shift()
    }
    if (i >= k - 1) {
      list.push(nums[windowList[0]])
    }
  }
  return list
};
// @lc code=end

