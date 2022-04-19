/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  let num = 0, len = n * n;
  let col = 0, row = 0;
  let result = [];
  let loop = (n >> 1) + 1
  let count = 1;
  for (let i = 0; i < n; i++) {
    result[i] = []
  }
  while (num < loop) {
    const offset = n - (num * 2);
    let i = col,j = row;
    for (i = col, len = col + offset; i <len;i++){
      result[j][i] = count++
    }

    for(j= row + 1)

  }
};
// @lc code=end

