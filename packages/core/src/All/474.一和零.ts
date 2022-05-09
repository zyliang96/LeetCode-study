/*
 * @lc app=leetcode.cn id=474 lang=typescript
 *
 * [474] 一和零
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
  // 首先可以判断的是，这个背包是个二维的数组,i 标识 0 的数量，j标识 1 的数量
  // dp[i][j] 应该标识的是 i 个 0 和 j 个 1 下的最大子集
  // dp[0][0] = 0
  // dp[i][j] = Math.max(dp[i][j],dp[i-zeroNum][j-oneNum] + 1);
  let dp = []
  // 这里是将整个背包的初始化数据都设置为了0
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0)
  }
  for (let str of strs) {
    let zeroNum = 0, oneNum = 0;
    for (let s of str) {
      if (s === '0') {
        zeroNum++
      } else {
        oneNum++
      }
    }
    // 从满背包开始，到正好满足背包
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
      }
    }
    console.log(dp)
  }
  return dp[m][n]
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))
// @lc code=end

