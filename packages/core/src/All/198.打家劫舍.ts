/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    // dp[i] 表示的是这个方法可以获取的最高的金额
    // dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
    let len = nums.length;
    let dp = [];
    // dp[0] 的值是第一间屋子的财富值
    dp[0] = nums[0];
    // dp[1] 的值是第一件和第二件屋子中最大的财富值
    dp[1] = Math.max(nums[1], dp[0]);
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
}
// @lc code=end
