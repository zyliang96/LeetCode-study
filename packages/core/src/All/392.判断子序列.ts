/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  // 基础版本，通过动态规划，dp[i][j] 标识 i 到 j 区间范围内的字符匹配情况，i 标识 s 的前一个字符，j 表示 t 的前j个字符
  // dp[i][j]  如果 s[i] == s[j] 那么dp[i][j] = dp[i-1][j-1] + 1; 否则 为 dp[i][j-1]
  // dp[0][0] = 0
  let sLen = s.length;
  let tLen = t.length;
  if (sLen === 0) {
    return true
  }
  let dp = []
  for (let i = 0; i < sLen; i++) {
    dp[i] = Array(tLen).fill(0)
  }
  for (let i = 0; i < sLen; i++) {
    for (let j = 0; j < tLen; j++) {
      // 相等的时候
      if (s[i] === t[j]) {
        if (i - 1 < 0 || j - 1 < 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1
        }
      } else {
        dp[i][j] = dp[i][j - 1 < 0 ? 0 : j - 1]
      }
    }
  }
  // console.log(dp)
  return dp[sLen - 1][tLen - 1] === sLen

};
// @lc code=end

