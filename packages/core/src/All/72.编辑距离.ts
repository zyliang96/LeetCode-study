/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  // 动态规划，定义dp[i][j] 是 调整的最小步骤
  // dp[i][j] 如果 word1[i] === word2[j] 那么 dp[i][j] = dp[i-1][j-1] ， 
  // 否则 dp[i][j] 为 下列中的结果中最小的一个    
  // 1、word1 上减去一个字符 dp[i][j-1] + 1   删除  
  // 2、word2 加一个字符 dp[i-1][j] + 1      新增
  // 3、对dp[i][j] 进行一次替换操作          替换


  let oneLen = word1.length;
  let twoLen = word2.length;
  let dp = []
  // 空字符串和另一个的情况，则是每一位都需要操作一步
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
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 这个推导公式需要注意，实际上就是三种情况，第一个字符串删除一次，或者第二个字符串删除一次，或者两个字符串都删除一次
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
      }
    }
  }
  return dp[oneLen][twoLen]
};
// @lc code=end

