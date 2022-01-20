/**
 Do not return anything, modify matrix in-place instead.
 */
// function setZeroes(matrix: number[][]): void {
//     // 从 i,i的位置开始遍历，从左到右遍历，如果遇到为0的则记录其行和列，最后再进行赋值操作
//     const m = matrix.length,
//         n = matrix[0].length;
//     let i = 0;
//     let mList = [];
//     let nList = [];
//     while (i < m && i < n) {
//         for (let j = i; j < m; j++) {
//             if (matrix[j][i] === 0) {
//                 if (nList.indexOf(i) < 0) {
//                     nList.push(i);
//                 }
//                 if (mList.indexOf(j) < 0) {
//                     mList.push(j);
//                 }
//             }
//         }
//         for (let j = i; j < n; j++) {
//             if (matrix[i][j] === 0) {
//                 if (nList.indexOf(j) < 0) {
//                     nList.push(j);
//                 }
//                 if (mList.indexOf(i) < 0) {
//                     mList.push(i);
//                 }
//             }

//         }
//         i++
//     }
//     mList.forEach((x) => {
//         for (let j = 0; j < n; j++) {
//             matrix[x][j] = 0
//         }
//     })
//     nList.forEach((y) => {
//         for (let j = 0; j < m; j++) {
//             matrix[j][y] = 0
//         }
//     })
//     console.log(matrix)
// };


/**
 * 思路：
 * 这个算法实际上是利用了如果为0，则对应行首和列首元素为0的特性，第二次遍历的时候,根据这个节点的行首和列首是否是0判断是否需要置为0
 * @param matrix 
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
}

// setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])
// setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
setZeroes([[1, 0]])