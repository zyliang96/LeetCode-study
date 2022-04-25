/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  let list = s.split('')
  let len = list.length;
  // let start = 0, end = 2 * k - 1;
  function reverse(s, i, j) {
    while (i <= j) {
      const temp = s[j]
      s[j] = s[i];
      s[i] = temp
      i++;
      j--;
    }
  }
  // 反转每个下标从 2k2k 的倍数开始的，长度为 kk 的子串。若该子串长度不足 kk，则反转整个子串。
  for (let i = 0; i < len; i += 2 * k) {
    reverse(list, i, Math.min(i + k, len) - 1)
  }
  // // 2k字符的计算逻辑
  // while (end < len) {
  //   reverse(list, start, start + k - 1)
  //   start = end + 1;
  //   end += 2 * k
  // }
  // // 剩余字符少于k个
  // if ((len - start) < k) {
  //   reverse(list, start, len - 1)
  // }

  // if ((len - start) >= k) {
  //   reverse(list, start, start + k - 1)
  // }

  return list.join('')
};

// console.log(reverseStr("abcdefg", 2))
// console.log(reverseStr("abcd", 2))
// console.log(reverseStr("abcd", 3))
// console.log(reverseStr("krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc", 20))
// @lc code=end

