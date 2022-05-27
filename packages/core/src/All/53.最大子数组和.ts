/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 动态规划计算，dp[i] 应该是前i个数中的最大连续子序列的和
  // dp[i] = Math.max(dp[i-1] + nums[i] ,nums[i])
  // dp[0] = nums[0]
  const len = nums.length
  let max = nums[0]
  let dp = []
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};
// @lc code=end

