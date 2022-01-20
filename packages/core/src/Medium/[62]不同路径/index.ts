/**
 * 思路：
 * 一个点只有两种选择，左移或者下移，所以将每次可以走的路放在队列中即可，所以对于任意一个点，的移动可行性是上边的加上左边的，最上面一层和最左边一层永远是1，因为只有一条路径可走
 * 因为这里只能通过右移和下移两种移动方式
 * @param m 
 * @param n 
 */
function uniquePaths(m: number, n: number): number {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        f[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        f[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }
    return f[m - 1][n - 1];
};
/**
 * 算数计算：
 * 从左上角到右下角的过程中，我们需要移动 m+n-2 次，其中有 m-1 次向下移动，n-1 次向右移动。因此路径的总数，就等于从 m+n-2 次移动中选择 m-1m−1 次向下移动的方案数，即组合数
 * @param m
 * @param n
 */
// function uniquePaths(m: number, n: number): number {
//     let ans = 1;
//     for (let x = n, y = 1; y < m; ++x, ++y) {
//         ans = Math.floor(ans * x / y);
//     }
//     return ans;
// };