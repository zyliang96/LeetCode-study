/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
    // 通用解法，实际上k次就包含k次买入和k次卖出，所以需要2 * k + 1 个状态
    // 奇数表示买入，偶数表示卖出，所以需要遍历处理两个状态，买入 -prices[i] 卖出 + prices[i]
    let len = prices.length;
    let dp = [];
    dp[0] = [];
    if (len === 0) {
        return 0;
    }
    for (let i = 0; i < 2 * k + 1; i++) {
        if (i % 2) {
            dp[0][i] = -prices[0];
        } else {
            dp[0][i] = 0;
        }
    }

    for (let i = 1; i < len; i++) {
        let result = [0];
        for (let j = 0; j < 2 * k - 1; j += 2) {
            // 买入
            result[j + 1] = Math.max(
                dp[i - 1][j + 1],
                dp[i - 1][j] - prices[i]
            );
            // 卖出
            result[j + 2] = Math.max(
                dp[i - 1][j + 2],
                dp[i - 1][j + 1] + prices[i]
            );
        }
        dp[i] = result;
    }

    return dp[len - 1][2 * k];
}
// @lc code=end
