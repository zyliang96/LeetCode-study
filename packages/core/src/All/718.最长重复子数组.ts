/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * 动态规划
 * @param nums1 
 * @param nums2 
 * @returns 
 */
function findLength(nums1: number[], nums2: number[]): number {
  // 最长重复子串实际上可以划分成一个二维数组，对应的值为[0,i][0,j]中重复的子数组
  let m = nums1.length;
  let n = nums2.length;
  let result = 0;
  let dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = []
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(nums1[i], nums2[j], i, j)
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1
        }
      } else {
        dp[i][j] = 0
      }


      if (dp[i][j] > result) {
        result = dp[i][j]
      }
    }
    // console.log(dp)
  }
  // console.log(dp)
  return result
};
// TODO 还有别的方法，可以后续考虑一下
// console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]))
// @lc code=end

