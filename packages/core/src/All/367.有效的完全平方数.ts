/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let right = num >> 1, left = 0;
  // 这里需要注意下，num 为 1的时候，中位数是0，所以需要处理为1
  if (!right) {
    right = 1
  }
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const val = mid * mid
    if (val > num) {
      right = mid - 1
    } else if (val < num) {
      left = mid + 1
    } else {
      return true
    }
  }
  return false
};
// @lc code=end

