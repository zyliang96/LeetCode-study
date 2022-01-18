/**
 * 思路：
 * 螺旋矩阵，所以要按螺旋找，即一层一层的遍历
 * @param matrix 
 */
// function spiralOrder(matrix: number[][]): number[] {
//     let left: number = 0,
//         right: number = matrix[0].length,
//         top: number = 0,
//         bottom: number = matrix.length;
//     let num = matrix.length * matrix[0].length;
//     let queue: number[] = []
//     while (num > 0) {
//         for (let i = left; i < right && num > 0; i++) {
//             queue.push(matrix[left][i])
//             num--
//         }
//         top++;
//         for (let i = top; i < bottom && num > 0; i++) {
//             console.log(i, right)
//             queue.push(matrix[i][right - 1])
//             num--
//         }
//         right--
//         for (let i = right - 1; i >= left && num > 0; i--) {
//             queue.push(matrix[bottom - 1][i])
//             num--
//         }
//         bottom--
//         for (let i = bottom - 1; i >= top && num > 0; i--) {
//             queue.push(matrix[i][left])
//             num--
//         }
//         left++
//     }
//     return queue
// };


/**
 * 按层遍历，需要辅助数组标识是否遍历过
 * @param matrix 
 * @returns 
 */
function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const rows = matrix.length, columns = matrix[0].length;
    const order = [];
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            order.push(matrix[top][column]);
        }
        for (let row = top + 1; row <= bottom; row++) {
            order.push(matrix[row][right]);
        }
        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {
                order.push(matrix[bottom][column]);
            }
            for (let row = bottom; row > top; row--) {
                order.push(matrix[row][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return order;
}


console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]))

