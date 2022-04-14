/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  let sRun = 0, tRun = 0;
  let sLen = s.length, tLen = t.length;
  let newS = '', newT = '';
  while (sRun < sLen || tRun < tLen) {
    if (s[sRun]) {
      if (s[sRun] === '#') {
        newS = newS.slice(0, newS.length - 1)
      } else {
        newS += s[sRun]
      }
    }
    if (t[tRun]) {

      if (t[tRun] === '#') {
        newT = newT.slice(0, newT.length - 1)
      } else {
        newT += t[tRun]
      }
    }
    sRun++;
    tRun++
  }
  if (newS === newT) {
    return true
  }
  return false
};
// @lc code=end

