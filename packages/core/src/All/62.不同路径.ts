/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  // 这个问题实际上就是求，dp[i][j]的值，其值是dp[i-1][j] + dp[i][j-1]的和
  // i = 0 或者 j = 0的值都是1,这个是处理边界情况
  let dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[i][j] = 1;
      } else if (j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

