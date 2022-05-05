/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// TODO 这个没太搞懂
// @lc code=start
function numTrees(n: number): number {
  // dp[i] 是 1到 i为节点组成的二叉搜索树的个数
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = 0
    for (let j = 1; j <= i; j++) {
      // console.log(dp[])
      dp[i] += dp[j - 1] * dp[i - j]
    }
    // console.log(dp)
  }
  return dp[n]
};


// console.log(numTrees(5))
// @lc code=end

