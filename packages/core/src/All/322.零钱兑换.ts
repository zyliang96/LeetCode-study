/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // dp[i] 为 满足总金额为amount的需要硬币虽少的个数
  // dp[i] = Math.min(dp[i],dp[i-coins[j]] + 1)
  let dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  let len = coins.length;
  // 凑足0元钱的硬币数是0个，所以dp[0] = 0
  dp[0] = 0;
  for (let i = 0; i < len; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
    }
    // console.log(dp)
  }
  return dp[amount] !== Number.MAX_SAFE_INTEGER ? dp[amount] : -1
};

console.log(coinChange([1, 2, 5], 11))
// @lc code=end

