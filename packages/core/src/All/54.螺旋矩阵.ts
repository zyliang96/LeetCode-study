/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  // 处理边界问题
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  let list = [];
  let left = 0,
    right = matrix[0].length,
    top = 0,
    bottom = matrix.length;
  let num = right * bottom
  while (left < right && top < bottom) {
    for (let i = left; i < right && num > 0; i++) {
      list.push(matrix[top][i])
      num--
    }
    top++;
    for (let j = top; j < bottom && num > 0; j++) {
      list.push(matrix[j][right - 1])
      num--
    }
    right--
    for (let i = right - 1; i >= left && num > 0; i--) {
      list.push(matrix[bottom - 1][i])
      num--
    }
    bottom--;
    for (let j = bottom - 1; j >= top && num > 0; j--) {
      list.push(matrix[j][left])
      num--
    }
    left++;
  }
  return list
}
// @lc code=end
