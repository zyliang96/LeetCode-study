/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start

/**
 * 贪心
 * @param prices
 * @returns
 */
// function maxProfit(prices: number[]): number {
//     // 贪心解法，贪心的解法实际上就是获取每一次的最大的正值，实际上换个想法，入股prices[i] -  prices[j]的值实际上是 prices[i] - prises[i-1] + prises[i-1] - prises[i-2] ... prises[j+1] - prises[j],
//     // 所以只要找打所有差值最大，且为正的值即是最有解

//     let result = 0;
//     for (let i = 1, len = prices.length; i < len; i++) {
//         result += Math.max(prices[i] - prices[i - 1], 0);
//     }
//     return result;
// }

/**
 * 动态规划
 */
function maxProfit(prices: number[]): number {
    // 动态规划实际上就是dp[i] = [持有股票的最大收益,不持有股票的最大收益];
    // 所以dp[i][0] 的值为 dp[i-1] 持有的值 和 dp[i-1]不持有 + prices[i]的值中最大的值

    // dp[i][1] 的值为dp[i-1][1] 和 prices[i] + dp[i-1][0]
    let dp = [];
    let len = prices.length;
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 持有
        const val1 = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
        // 不持有
        const val2 = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
        dp[i] = [val1, val2];
    }
    return dp[len - 1][1];
}
// @lc code=end
