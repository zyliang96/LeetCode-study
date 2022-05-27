/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 */

// @lc code=start
function numDistinct(s: string, t: string): number {
  // 动态规划问题，dp[i][j] 表示，前i-1个中相同的最大数量
  // dp[i][j] = 如果 s[i] == t[j] 则 dp[i - 1][j - 1] + dp[i - 1][j] 否则 为 dp[i - 1][j]
  // 对于空字符串来说，应该只有一种，所以dp[0][0]为1，这个初始化是个要点
  let sLen = s.length;
  let tLen = t.length;
  let dp = Array.from(Array(s.length + 1), () => Array(t.length + 1).fill(0));

  for (let i = 0; i <= s.length; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  // console.log(dp)
  return dp[sLen][tLen]
};

// console.log(numDistinct("rabbbit", "rabbit"))
// @lc code=end

