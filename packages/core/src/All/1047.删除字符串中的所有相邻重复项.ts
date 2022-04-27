/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  let list = [];
  for (let i = 0, len = s.length; i < len; i++) {
    const data = list[list.length - 1];
    if (data === s[i]) {
      list.pop()
    } else {
      list.push(s[i])
    }
  }
  return list.join('')
};
// @lc code=end

