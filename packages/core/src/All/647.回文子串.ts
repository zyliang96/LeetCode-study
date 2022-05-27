/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
// function countSubstrings(s: string): number {
//   // 回溯法求解，会超出调用栈的最大限制

//   let result = []
//   let len = s.length;
//   /**
//    * 回文串
//    */
//   function reserve(list) {
//     let i = 0;
//     let j = list.length - 1;
//     let flag = true
//     while (i <= j) {
//       if (list[i] !== list[j]) {
//         flag = false;
//         break
//       }
//       i++;
//       j--;
//     }
//     return flag
//   }


//   function loop(index, list = []) {
//     // console.log(list, index)
//     if (list.length) {
//       const flag = reserve(list);
//       if (flag) {
//         result.push(list.join(''))
//       }
//     }
//     if (index === len) {
//       return
//     }
//     for (let i = index; i < len; i++) {
//       if (list.length && i - index >= 1) {
//         break
//       }
//       list.push(s[i])
//       loop(i + 1, list);
//       list.pop()
//     }
//   }
//   loop(0)
//   return result.length
// };


function countSubstrings(s: string): number {
  // 动态规划 dp[i],前i个可以称为回文串的最大次数
  // dp[i] =  如果前i个字符本身是回文串，那么 dp[i] = dp[i-1] + 字符本身 + 前i个本身

};

// console.log(countSubstrings('aaa'))
// @lc code=end

