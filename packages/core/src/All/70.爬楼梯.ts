/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // 爬楼梯这个方法，首先需要确定的一点是，第n个台阶有几种方案取决于，f(n-1)的方案 + f(n-2)的方案，因为f(n-1)方案的基础上，走一步，就到了指定台阶，f(n-2)方案一次走两个台阶，就到了指定调节，所以这个是由于可以走的步数确定的
  function db(a, b, count) {
    if (count === 1) {
      return a
    }
    if (count === 2) {
      return b
    }
    return db(b, a + b, count - 1)
  }
  return db(1, 2, n)
};
// 1134903170
console.log(climbStairs(44))
// @lc code=end

