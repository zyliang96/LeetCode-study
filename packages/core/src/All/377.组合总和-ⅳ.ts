/*
 * @lc app=leetcode.cn id=377 lang=typescript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
// function combinationSum4(nums: number[], target: number): number {
//   let dp = Array(target + 1).fill(0);
//   let len = nums.length;
//   // 没有零钱的时候，只有一种方式就是不放
//   dp[0] = 1
//   // 这个求的是所有的组合可能，
//   for (let i = 0; i < len; i++) {
//     for (let j = nums[i]; j <= target; j++) {
//       dp[j] += dp[j - nums[i]]
//     }
//     console.log(dp)
//   }
//   return dp[target]
// };


function combinationSum4(nums: number[], target: number): number {
  let dp = Array(target + 1).fill(0);
  let len = nums.length;
  // 没有零钱的时候，只有一种方式就是不放
  dp[0] = 1
  // 这个求的是排列
  for (let i = 0; i <= target; i++) {
    for (let j = 0; j <= len; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]]
      }
    }
    // console.log(dp)
  }
  return dp[target]
};

console.log(combinationSum4([1, 2, 3], 4))
// @lc code=end

