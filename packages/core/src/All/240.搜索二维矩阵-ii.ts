/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }

  let rows = matrix.length, columns = matrix[0].length;
  // 从左到右递增和从上到下递增，所以从左侧第一个元素开始，到右下最后一个元素都是递增的，所以，对角线上的数据相当于数据的中轴线
  // 对于一个点matrix[i][j]上的数据，那么肯定存在 matrix[i][j] > matrix[i-1][j] && matrix[i][j] > matrix[i][j-1] && matrix[i][j] > matrix[i-1][j-1]
  // 所以无论如何都应该从对角线上进行遍历处理，找任意一个顶角上的即可，但是需要朝固定方向移动，否则会出错


  let row = 0, column = columns - 1;

  while (row < rows && column >= 0) {
    let num = matrix[row][column];
    if (num == target) {
      return true;
    } else if (num > target) {
      column--;
    } else {
      row++;
    }
  }

  // let row = rows - 1, column = 0;

  // while (column < columns && row >= 0) {
  //   let num = matrix[row][column];
  //   if (num == target) {
  //     return true;
  //   } else if (num > target) {
  //     row--;
  //   } else {
  //     column++;
  //   }
  // }

  return false;
};



// @lc code=end

