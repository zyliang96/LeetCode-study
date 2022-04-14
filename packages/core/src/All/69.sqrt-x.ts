/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * 计算平方根
 * 1、k ^ 2 = x,所以 一直二分查找，直到找到符合的

 * @param x 
 */
function mySqrtBinary(x: number): number {
  let left = 0, right = x;
  let result = -1
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const val = mid * mid;
    if (val > x) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1
    }
  }
  return result
};

/**
 * 平方根是 x ** 0.5 e的 0.5 * lnx 次方，
 * @param x 
 * @returns 
 */
function mySqrt(x: number): number {
  if (x === 0) {
    return 0
  }
  let result = Math.exp(0.5 * Math.log(x)) >> 0;
  let ans = result + 1
  // 这里应该是为了避免出现因为精度问题导致的偏差，所以才进行了+1判断
  return (ans * ans) <= x ? ans : result
};

// @lc code=end

