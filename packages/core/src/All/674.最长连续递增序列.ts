/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * 动态规划解法
 * @param nums 
 * @returns 
 */
// function findLengthOfLCIS(nums: number[]): number {
//   // 因为是连续递增序列，所以本质上比对的是nums[i] 和 nums[i-1];
//   // 如果，nums[i] > nums[i-1],则 dp[i] 的值是dp[i-1] + 1
//   // 由于每一个值都是单独的一个子序列，所以初始化的时候，初始值全部为1
//   let len = nums.length;
//   if (len === 0) {
//     return 0
//   }
//   let dp = Array(len).fill(1);
//   let result = 1
//   for (let i = 1; i < len; i++) {
//     // 满足递增逻辑的才进行相加
//     if (nums[i] > nums[i - 1]) {
//       dp[i] = dp[i - 1] + 1
//     }
//     if (dp[i] > result) {
//       result = dp[i]
//     }
//   }
//   return result
// }

/**
 * 贪心
 * @param nums 
 * @returns 
 */
function findLengthOfLCIS(nums: number[]): number {
  // 贪心实际上就是判断如果连续的，则count++，否则重置为1，然后找打最大即可
  let len = nums.length;
  if (len === 0) {
    return 0
  }
  let count = 1;
  let result = 1
  for (let i = 1; i < len; i++) {
    // 满足递增逻辑的才进行相加
    if (nums[i] > nums[i - 1]) {
      count++
    } else {
      count = 1
    }
    if (count > result) {
      result = count
    }
  }
  return result
}
// @lc code=end

