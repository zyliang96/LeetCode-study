/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  let sum = 0
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (sum % 2 === 1) {
    return false
  }
  let target = sum >> 1;
  let dp = Array(target + 1).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }
  return dp[target] === target;
};
// @lc code=end

