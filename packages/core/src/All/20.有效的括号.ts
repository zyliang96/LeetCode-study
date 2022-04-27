/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let list = [];
  // TODO if判断
  // for (let i = 0, len = s.length; i < len; i++) {
  //   if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
  //     list.push(s[i])
  //   } else {
  //     const data = list.pop()
  //     if ((data != '(' && s[i] == ")") || (data != '{' && s[i] == "}") || (data != '[' && s[i] == "]")) {
  //       return false
  //     }
  //   }
  // }

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  for (let i = 0, len = s.length; i < len; i++) {
    if (map[s[i]]) {
      list.push(map[s[i]])
    } else {
      const data = list.pop()
      if (data !== s[i]) {
        return false
      }
    }
  }

  return list.length === 0
};
// @lc code=end

