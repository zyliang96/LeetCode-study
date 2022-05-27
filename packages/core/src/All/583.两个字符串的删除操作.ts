/*
 * @lc app=leetcode.cn id=583 lang=typescript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  // 没有任何想法的时候，就考虑是否可以用动态规划解决
  // dp[i][j] 应该是标识，删除的最小步骤
  // dp[i][j] = 如果word1[i] === word2[j] 那么dp[i][j] === dp[i-1][j-1] 否则取min(dp[i-1][j] + 1,dp[i][j-1]+ 1,dp[i-1][j-1]+ 2)
  // dp初始化

  let oneLen = word1.length;
  let twoLen = word2.length;
  let dp = []
  for (let i = 0; i <= oneLen; i++) {
    dp[i] = [i]
    if (i === 0) {
      for (let j = 1; j <= twoLen; j++) {
        dp[i][j] = j
      }
    }
  }

  for (let i = 1; i <= oneLen; i++) {
    for (let j = 1; j <= twoLen; j++) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 这个推导公式需要注意，实际上就是三种情况，第一个字符串删除一次，或者第二个字符串删除一次，或者两个字符串都删除一次
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2)
      }
    }
  }
  return dp[oneLen][twoLen]
};
// @lc code=end

