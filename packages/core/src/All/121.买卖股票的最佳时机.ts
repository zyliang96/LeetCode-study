/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 方法1
 * @param prices
 * @returns
 */
// function maxProfit(prices: number[]): number {
//     // TODO 注意这里说的是只能一次买入和一次卖出
//     // 实际上就是对应那天买还是不买，最简单的做法应该是找到最小的那个值，然后求最大的结果

//     // 求最大差值
//     let result = 0;
//     let min = Number.MAX_SAFE_INTEGER;
//     for (let i = 0, len = prices.length; i < len; i++) {
//         min = Math.min(min, prices[i]);
//         result = Math.max(result, prices[i] - min);
//     }
//     return result;
// }

/**
 * 动态规划
 * @param prices
 */
function maxProfit(prices: number[]): number {
    // TODO 注意这里说的是只能一次买入和一次卖出
    // 实际上就是对应那天买还是不买，最简单的做法应该是找到最小的那个值，然后求最大的结果
    // 所以此时 dp[i][0] 表示第i天持有的结果，dp[i][1]不持有的最大值

    let dp = [];
    let len = prices.length;
    if (len === 0) {
        return 0;
    }

    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 持有的值是 之前的持有值 和 持有当前最大的中的一个
        const val1 = Math.max(dp[i - 1][0], -prices[i]);
        // 不持有的值是 之前持有现在卖掉的值 和 之前不持有中最大的一个
        const val2 = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
        dp[i] = [val1, val2];
    }
    // 因为不持有肯定不持有值大，所以去dp[len-1][1]
    return dp[len - 1][1];
}
// @lc code=end
