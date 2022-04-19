/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
    let num = 0,
        len = n * n;
    let col = 0,
        row = 0;
    let offset = 1;
    let result = [];
    let loop = (n >> 1) + 1;
    let count = 1;
    for (let i = 0; i < n; i++) {
        result[i] = [];
    }
    while (num < loop) {
        offset = n - num * 2;
        let i = col,
            j = row;
        console.log(i, j,offset);
        // 顶部从左到右
        for (i = col, len = col + offset - 1; i < len; i++) {
            result[j][i] = count++;
        }
        // 右侧从顶到底
        for (j = row; j < row + offset - 1; j++) {
            result[j][i] = count++;
        }
        // 底部从右到左
        for (; i > col; i--) {
            result[j][i] = count++;
        }

        // 左侧，从底到顶
        for (; j > row; j--) {
            result[j][i] = count++;
        }
        col++;
        row++;
        num++;
    }
    return result;
}

console.log(generateMatrix(3));
// @lc code=end
