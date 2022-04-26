/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * 这个是利用kmp的next 算法判断的
 * @param s 
 * @returns 
 */
// function repeatedSubstringPattern(s: string): boolean {
//   let list = [];
//   let j = -1, len = s.length;
//   list[0] = j
//   if (len === 0) {
//     return false
//   }
//   for (let i = 1; i < len; i++) {
//     while (j >= 0 && s[i] !== s[j + 1]) {
//       j = list[j]
//     }
//     if (s[i] === s[j + 1]) {
//       j++
//     }
//     list[i] = j
//   }
//   // console.log(list)
//   if (list[len - 1] != -1 && (len % (len - (list[len - 1] + 1)) === 0)) {
//     return true
//   }
//   return false
// };

// 利用截取，时间复杂度是O(n ^ 2)
function repeatedSubstringPattern(s: string): boolean {
  for (let i = 1, len = s.length; i * 2 <= len; i++) {
    if (len % i === 0) {
      let match = true;
      for (let j = i; j < len; j++) {
        if (s.charAt(j) !== s.charAt(j - i)) {
          match = false;
          break
        }
      }
      if (match) {
        return true
      }
    }
  }
  return false
};

// console.log(repeatedSubstringPattern("aba"))
// @lc code=end

