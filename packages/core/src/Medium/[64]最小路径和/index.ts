/**
 * 
 * @param grid 
 */
function minPathSum(grid: number[][]): number {

    let m = grid.length,
        n = grid[0].length;
    // 建立二维数组标识每个各自的路径
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    //按照行遍历
    for (let i = 0; i < m; i++) {
        // 遍历每一列
        for (let j = 0; j < n; j++) {
            // i 和 j 都为0的时候，初始值为1
            if (i === 0 && j === 0) {
                f[i][j] = grid[i][j]
                continue
            }
            // 左边不存在，则只计算上班的值
            if (i - 1 < 0) {
                f[i][j] = f[i][j - 1] + grid[i][j];
            } else if (j - 1 < 0) {
                // 上方的值不存在，则只算左侧的值
                f[i][j] = f[i - 1][j] + grid[i][j];
            } else {
                // 计算左侧和上放的值
                f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j];
            }

        }
    }
    return f[m - 1][n - 1];

};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))