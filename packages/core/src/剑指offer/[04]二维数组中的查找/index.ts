// 剑指 Offer 04. 二维数组中的查找
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。



// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。



// 限制：

// 0 <= n <= 1000

// 0 <= m <= 1000

// 二分会有问题，先按照线性查找
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
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