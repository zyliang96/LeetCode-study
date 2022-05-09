/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
function numSquares(n: number): number {
  // 实际上也是背包问题，判断完全平方数组成的值最小
  // dp[i] 为 值为i的平方数最小组合
  // dp[i] = Math.min(dp[i],dp[i - nums[j]] + 1);


  let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i * i <= n; i++) {
    for (let j = i * i; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - (i * i)] + 1)
    }
    // console.log(dp)
  }
  return dp[n]
};

console.log(numSquares(12))
// @lc code=end

