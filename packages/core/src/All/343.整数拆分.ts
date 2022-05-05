/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  // 整数拆分，实际上应该是计算和为 n 的最大乘积，假定存在一个数组dp,dp[i]标识，和为i的最大乘积，那么dp[n] = dp[i]*dp[n-i];
  let dp = [];
  // dp[0] = 1;
  // dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    // 设置一个初始值，可以是无穷小
    dp[i] = 0;
    // 这个流程就是判断不同组合的最大值，(i-j)* j 是计算两数之积，dp[i-j] * j 是两个及以上的值的积
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j))
    }
  }
  return dp[n]
};
// @lc code=end

