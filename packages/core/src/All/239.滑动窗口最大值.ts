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
    // 这里是为了保证一个单调递减，这一步很关键
    while (windowList.length && nums[i] > nums[windowList[windowList.length - 1]]) {
      windowList.pop()
    }
    // console.log(windowList)
    // 这里存储的是具体位置的索引，因为要判断具体的位置是否超出了i-k这个范围
    windowList.push(i)
    if (windowList[0] <= i - k) {
      windowList.shift()
    }
    // 从第k个开始计算
    if (i >= k - 1) {
      list.push(nums[windowList[0]])
    }
  }
  return list
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
// @lc code=end

