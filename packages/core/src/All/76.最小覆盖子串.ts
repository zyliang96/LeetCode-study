/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  let resultMap = {};
  let tLen = t.length, tSum = tLen;
  let startAndEnd = []
  let result = ''
  // 构建需要的map数量
  for (let i = 0, len = t.length; i < len; i++) {
    if (resultMap[t[i]]) {
      resultMap[t[i]] += 1
    } else {
      resultMap[t[i]] = 1
    }
  }
  let j = 0, len = s.length;
  // 遍历字符串s，然后找出满足需求的最小字符串
  for (let i = 0; i < len; i++) {
    // 扣除对应需要的字符数量,只有在resultMap[s[i]]  > 0 的时候才进行tSum-- , 因为只有这个时候才有扣除的意义
    if (resultMap[s[i]] || resultMap[s[i]] === 0) {
      if (resultMap[s[i]] > 0) {
        tSum--;
      }
      resultMap[s[i]] -= 1;
    }

    // 找到一个最小的字符串
    while (tSum === 0) {
      // 比较大小
      if (startAndEnd.length > 0) {
        if ((startAndEnd[1] - startAndEnd[0]) > (i - j)) {
          startAndEnd = [j, i]
        }
      } else {
        startAndEnd = [j, i]
      }
      // 判断偏移j是否会造成影响，只有在resultMap[s[j]]  本身满足 >= 的情况下，才进行增加
      if (resultMap[s[j]] || resultMap[s[j]] === 0) {
        if (resultMap[s[j]] >= 0) {
          tSum++;
        }
        resultMap[s[j]] += 1;
      }
      j++
    }
  }

  if (startAndEnd.length > 0) {
    result = s.slice(startAndEnd[0], startAndEnd[1] + 1)
  }
  return result
};


// console.log(minWindow("ADOBECODEBANC", "ABC"))
// @lc code=end

