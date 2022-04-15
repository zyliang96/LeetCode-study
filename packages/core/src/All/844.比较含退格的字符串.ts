/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start

/**
 * 字符串处理形式
 * @param s 
 * @param t 
 * @returns 
 */
function backspaceCompareString(s: string, t: string): boolean {
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

/**
 * #号删除，所以从后往前找，应该是可以保证后面的数据正确的
 * 然后通过记录#的数量，来判断实际匹配位置的字符，然后在进行比较
 * @param s 
 * @param t 
 * @returns 
 */
function backspaceCompare(s: string, t: string): boolean {
  let sLen = s.length, tLen = t.length;
  let sIndex = sLen - 1, tIndex = tLen - 1;
  let sNum = 0, tNum = 0;
  while (sIndex >= 0 || tIndex >= 0) {
    while (sIndex >= 0) {
      if (s[sIndex] === '#') {
        sNum++
        sIndex--
      } else if (sNum > 0) {
        sNum--
        sIndex--
      } else {
        break
      }
    }
    while (tIndex >= 0) {
      if (t[tIndex] === '#') {
        tNum++
        tIndex--
      } else if (tNum > 0) {
        tNum--
        tIndex--
      } else {
        break
      }
    }
    // console.log(sIndex, tIndex)
    if (s[sIndex] !== t[tIndex]) {
      return false
    }
    sIndex--;
    tIndex--;
  }
  return true
};

// console.log(backspaceCompare("ab#c", "ad#c"))
// @lc code=end

