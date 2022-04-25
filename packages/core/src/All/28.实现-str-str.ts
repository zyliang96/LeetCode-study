/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
// function strStr(haystack: string, needle: string): number {
//   // 获取前缀表
//   // 这里应该是为了构建一个可以找到字符串中上一个类似字符的点，从而快速定位
//   function getNext(next: number[], str: string) {
//     let j = -1;
//     next[0] = j;
//     for (let i = 1, len = str.length; i < len; i++) {
//       while (j >= 0 && str[i] !== str[j + 1]) {
//         j = next[j]; // 向前退
//       }
//       if (str[i] === str[j + 1]) {
//         j++
//       }
//       next[i] = j
//     }
//   }
//   let next = []
//   getNext(next, needle);
//   let j = -1, len = haystack.length;
//   for (let i = 0; i < len; i++) {
//     while (j >= 0 && haystack[i] !== needle[j + 1]) {
//       j = next[j]
//     }
//     if (haystack[i] === needle[j + 1]) {
//       j++
//     }
//     if (j === (needle.length - 1)) {
//       return (i - needle.length + 1)
//     }
//   }
//   return -1

// };

function strStr(haystack: string, needle: string): number {
  // 获取前缀表
  // 这里应该是为了构建一个可以找到字符串中上一个类似字符的点，从而快速定位

  // TODO 没搞懂为啥，后续搞
  function getNext(next: number[], str: string) {
    let j = 0;
    next[0] = j;
    for (let i = 1, len = str.length; i < len; i++) {
      while (j >= 0 && str[i] !== str[j]) {
        j = next[j - 1]; // 向前退
      }

      // 如果str[i] 等于 str[j] 说明这俩值一样，这个时候就需要将j右移一位
      if (str[i] === str[j]) {
        j++
      }
      next[i] = j
    }
  }
  let next = []
  getNext(next, needle);
  let j = -1, len = haystack.length;
  for (let i = 0; i < len; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j]
    }
    if (haystack[i] === needle[j + 1]) {
      j++
    }
    if (j === (needle.length - 1)) {
      return (i - needle.length + 1)
    }
  }
  return -1

};
// @lc code=end

