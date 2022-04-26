/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let list = []
  for (let i = 0, len = nums.length; i < len; i++) {
    // 如果num[i] 和 nums[i - 1] 一致，说明没有啥匹配的必要了
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1, right = len - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        list.push([nums[i], nums[left], nums[right]])
        // 排除一样的数据
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        // 然后左右各进一步，分析接下来的数据
        left++;
        right--
      }
    }
  }
  return list
};
// @lc code=end

