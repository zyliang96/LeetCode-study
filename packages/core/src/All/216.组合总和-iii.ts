/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  let list = []
  function dfs(curSum, index, temp = []) {
    // console.log(curSum, index, temp)

    if (curSum === 0 && temp.length === k) {
      list.push(temp.slice())
      return
    }
    // 剪枝，当curSum 小于0，或者curSum本身小于index的时候，说明后面肯定会导致curSum 小于 0
    if (curSum < 0 || curSum < index) {
      return
    }
    if (index > 9) {
      return
    }

    temp.push(index);
    dfs(curSum - index, index + 1, temp)
    temp.pop()
    dfs(curSum, index + 1, temp)
  }
  dfs(n, 1, [])
  return list
};

// console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 7))
// @lc code=end

