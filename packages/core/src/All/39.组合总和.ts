/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  let list = [];
  // 剪枝需要确定顺序
  candidates.sort((a, b) => a - b)
  function dfs(curSum, index, len, temp = []) {
    if (curSum === 0) {
      list.push(temp.slice())
      return
    }
    if (index >= len || curSum < 0) {
      return
    }
    if (curSum < candidates[index]) {
      return
    }
    temp.push(candidates[index])
    dfs(curSum - candidates[index], index, len, temp)
    temp.pop()
    dfs(curSum, index + 1, len, temp)
  }
  dfs(target, 0, candidates.length, [])
  return list
};

// console.log(combinationSum([2, 3, 5], 8))
// @lc code=end

