/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    // 这道题限制了买入和卖出的次数
    // 动态规划，这里实际上是将整体状态做了区分，
    // 一天一共就有五个状态，
    // 0 没有操作
    // 1 第一次买入
    // 2 第一次卖出
    // 3 第二次买入
    // 4 第二次卖出
    // dp[i][0] 的值为 永远为0
    // dp[i][1] 前一天没有操作 + 今天操作的值
    // dp[i][2] 前一条操作一次 + 今天卖出的值，和 前一天 第一次卖出的值中最大的

    let dp = [];
    let len = prices.length;
    dp[0] = [0, -prices[0], 0, -prices[0], 0];

    for (let i = 1; i < len; i++) {
        // 第一次买入
        const val1 = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
        // 第一次卖出的值
        const val2 = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);
        // 第二次买入
        const val3 = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
        // 第二次排除
        const val4 = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);

        dp[i] = [0, val1, val2, val3, val4];
    }

    return dp[len - 1][4];
}
// @lc code=end
