/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * 这道题读题很关键，题目中明确说明了，可能会存在无限循环的情况，所以说明在遇到出现过的值时，就需要跳出循环
 * 如果以链表的形式考虑，实际上，就是判断一个链表是否为环，判断为环的逻辑，可以通过快慢指针进行
 * @param n 
 * @returns 
 */
// function isHappy(n: number): boolean {
//   function getSum(num: number) {
//     let sum = 0;
//     while (num) {
//       const val = num % 10
//       sum += val ** 2;
//       num = Math.floor(num / 10)
//     }
//     return sum
//   }
//   let map = {};
//   let result = false
//   while (n) {
//     n = getSum(n);
//     if (n === 1) {
//       result = true
//       break
//     }
//     if (map[n]) {
//       break
//     }
//     map[n] = 1

//   }
//   return result

// };

/**
 * 快慢指针的想法，快指针走两步，满指针走一步，当快慢指针相等的时候，说明成环，此时就说明不为快乐数了
 * @param n 
 * @returns 
 */
function isHappy(n: number): boolean {
  function getSum(num: number) {
    let sum = 0;
    while (num) {
      const val = num % 10
      sum += val ** 2;
      num = Math.floor(num / 10)
    }
    return sum
  }
  let fast = getSum(n), slow = n;
  while (fast !== 1 && fast !== slow) {
    slow = getSum(slow);
    fast = getSum(getSum(fast))
  }
  return fast === 1

};
// @lc code=end

