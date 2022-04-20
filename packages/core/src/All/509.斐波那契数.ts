/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
// 递归写法
// function fib(n: number): number {
//   if (n < 2) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2)
// };


function fib(n: number): number {
  if (n < 2) {
    return n
  }
  function func(a, b, index, count) {
    if (index >= count) {
      return a + b
    }
    return func(b, a + b, index + 1, count)
  }
  return func(0, 1, 2, n)
};
// @lc code=end

