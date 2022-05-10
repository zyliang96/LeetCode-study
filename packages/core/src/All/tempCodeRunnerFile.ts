/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
    function robRange(nums, left, right) {
        let dp = [];
        // dp[0] 的值是第一间屋子的财富值
        dp[left] = nums[left];
        // dp[1] 的值是第一件和第二件屋子中最大的财富值
        dp[left + 1] = Math.max(nums[left + 1], dp[left]);
        for (let i = left + 2; i <= right; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
        }
        return dp[right];
    }

    let len = nums.length;
    if (len === 0) {
        return 0;
    }

    if (len === 1) {
        return nums[0];
    }

    let result1 = robRange(nums, 0, len - 2);
    let result2 = robRange(nums, 1, len - 1);
    return Math.max(result1, result2);
}
// @lc code=end
