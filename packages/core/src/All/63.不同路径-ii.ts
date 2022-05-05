/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  // 这个问题实际上就是求，dp[i][j]的值，其值是dp[i-1][j] + dp[i][j-1]的和
  // i = 0 或者 j = 0的值都是1,这个是处理边界情况
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = [];
  // 构建二维数组
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果有障碍物，则必定是0
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        // 如果是起始位置 则设置为1
        if (i === 0 && j === 0) {
          dp[i][j] = 1
        } else {
          // 非起始位置，顶部的值，都是前一个的值
          if (i === 0) {
            dp[i][j] = dp[i][j - 1];
          } else if (j === 0) {
            // 左侧的值都是上面一个数的值
            dp[i][j] = dp[i - 1][j];
          } else {
            // 其他情况和之前一致
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
          }
        }

      }
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

