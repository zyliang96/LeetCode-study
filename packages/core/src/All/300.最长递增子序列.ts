/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    // 实际上就是推断 dp[i] 的值为dp[i]  和dp[j] + 1
    let len = nums.length;
    if (len <= 1) {
        return len;
    }

    let result = 0;
    // 首先，每一个值实际上都可以成为一个子序列，所以最小为1,
    let dp = Array(len + 1).fill(1);
    // 这里用第i个值和前 i个值进行比较
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            // 如果第i个值比第j个值大，说明递增，所以需要取第i个值最大和第j个值 + 1
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            // 超过了最大值就赋值给result，避免过滤掉
            if (dp[i] > result) {
                result = dp[i];
            }
        }
    }
    return result;
}
// @lc code=end
