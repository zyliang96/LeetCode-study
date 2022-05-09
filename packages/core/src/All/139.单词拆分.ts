/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  let len = wordDict.length
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < len; j++) {
      if (i >= wordDict[j].length) {
        if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
          dp[i] = true
        }
      }
    }
  }
  return dp[s.length]
};
// @lc code=end

