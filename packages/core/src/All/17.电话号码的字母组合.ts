/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let list = []
  let len = digits.length;

  // 利用for循环，来进行横向遍历
  // function dfs(loop, temp = []) {

  //   if (loop >= len) {
  //     const data = temp.join('')
  //     if (data.length > 0) {
  //       list.push(data);
  //     }
  //     return
  //   }
  //   const targetList = letterMap[digits[loop]]
  //   for (let i = 0, len = targetList.length; i < len; i++) {
  //     temp.push(targetList[i])
  //     dfs(loop + 1, temp)
  //     temp.pop()
  //   }
  // }
  // dfs(0, [])

  // 完全递归
  function dfs(loop, index, temp) {
    if (loop >= len) {
      const data = temp.join('')
      if (temp.length === len && data) {
        list.push(data);
      }
      return
    }
    let targetList = letterMap[digits[loop]]
    // 如果当前遍历完了，直接进入下一层遍历，否则当前层遍历
    if (index >= targetList.length) {
      index = 0
      loop++
      dfs(loop + 1, 0, temp)
    } else {
      temp.push(targetList[index])
      dfs(loop + 1, 0, temp)
      temp.pop()
      dfs(loop, index + 1, temp)
    }
  }
  dfs(0, 0, [])
  return list
};
// console.log(letterCombinations('23'))
// @lc code=end

