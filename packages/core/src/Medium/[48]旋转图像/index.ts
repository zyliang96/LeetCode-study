/**
 Do not return anything, modify matrix in-place instead.
 思路：
 按照对角线开始遍历，然后移动对应的位置，n * n 的矩阵，实际上只要移动一般次数即可
 */
function rotate(matrix: number[][]): void {
    let x: number = matrix.length;
    let half: number = x >> 1;
    let i: number = 0;
    while (i < half) {
        let len = x - i;
        for (let j = i; j < len - 1; j++) {
            exchange(matrix, i, j, x)
        }
        i++
    }
    console.log(matrix)
};

/**
 * 交换位置
 * @param list 目标数组 
 * @param x 行
 * @param y 列
 * @param len 长度
 * @param noopNum 循环次数
 */
function exchange(list: number[][], x: number, y: number, len: number) {
    let i = y;
    let j = len - x - 1
    for (let k = 0; k < 3; k++) {
        let z = i;
        const temp = list[i][j]
        list[i][j] = list[x][y]
        list[x][y] = temp
        i = j;
        j = len - z - 1;
    }
}


/**
 * 水平翻转+对角线翻转
 * 这个是矩阵旋转的问题，矩阵上下翻转实际上是向右旋转180°，或想做旋转180°，然后根据对角线旋转相当于再旋转270°，这样相当于旋转了360°后又旋转了90°，这个在图形学里应该很有用处
 * @param matrix 
 */
// function rotate(matrix: number[][]): void {
//     const n = matrix.length;
//     // 水平翻转
//     for (let i = 0; i < Math.floor(n / 2); i++) {
//         for (let j = 0; j < n; j++) {
//             [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
//         }
//     }
//     // 主对角线翻转
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
//     console.log(matrix)
// };

rotate([[1,2,3],[4,5,6],[7,8,9]])
