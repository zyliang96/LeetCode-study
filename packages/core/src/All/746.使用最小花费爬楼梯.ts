/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  // dp[i]的定义应该是到达第i个台阶所花费的最少体力;
  // 因为每次向上爬的高度只能是1步或者2步，所以可以猜测能够通过 i-1 和 i-2推测出 第i个，即登上第i-1个台阶的最小花费+第i-1个台阶本身的花费 
  // dp[i] 的计算 依赖于 dp[i-1] 于 dp[i-2];所以dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
  // 定义dp[0] 和 dp[1];
  let dp = [];
  dp[0] = 0;
  dp[1] = 0;
  // 登上
  for (let i = 2, len = cost.length; i <= len; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[cost.length]
};
// @lc code=end

