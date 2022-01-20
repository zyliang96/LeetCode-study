/**
 * 思路：
 * 和不同路径的逻辑一样，只是障碍物的值变为0
 * @param obstacleGrid 
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    // 建立二维数组标识每个各自的路径
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    //按照行遍历
    for (let i = 0; i < m; i++) {
        // 遍历每一列
        for (let j = 0; j < n; j++) {
            // 如果有障碍物则为0，然后进行下一次循环
            if (obstacleGrid[i][j]) {
                f[i][j] = 0;
                continue
            }
            // i 和 j 都为0的时候，初始值为1
            if (i === 0 && j === 0) {
                f[i][j] = 1
                continue
            }
            // 左边不存在，则只计算上班的值
            if (i - 1 < 0) {
                f[i][j] = f[i][j - 1];
            } else if (j - 1 < 0) {
                // 上方的值不存在，则只算左侧的值
                f[i][j] = f[i - 1][j];
            } else {
                // 计算左侧和上放的值
                f[i][j] = f[i - 1][j] + f[i][j - 1];
            }

        }
    }
    return f[m - 1][n - 1];

};

console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]))
console.log(uniquePathsWithObstacles([[1, 0]]))
console.log(uniquePathsWithObstacles([[1], [0]]))