/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
  let sum = 0
  let len = stones.length;
  for (let i = 0; i < len; i++) {
    sum += stones[i]
  }
  let target = sum >> 1;
  let dp = Array(target + 1).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return sum - dp[target] - dp[target];
};
// @lc code=end

