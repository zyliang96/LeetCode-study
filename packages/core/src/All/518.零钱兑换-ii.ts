/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
  // dp[i] 应该是对应金额的组合方式
  // dp[i] += dp[i-coins[i]]
  let dp = Array(amount + 1).fill(0);
  let len = coins.length;
  // 没有零钱的时候，只有一种方式就是不放
  dp[0] = 1
  for (let i = 0; i < len; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount]
};
// @lc code=end

