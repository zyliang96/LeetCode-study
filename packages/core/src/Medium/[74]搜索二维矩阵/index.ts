/**
 * 思路：
 * 先根据行判断，看取值范围，然后按照列判断，时间复杂度O(m+n)
 * 遇到的问题：
 * 边界问题没有处理干净
 * @param matrix 
 * @param target 
 * @returns 
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    const row: number = matrix.length;
    const col: number = matrix[0].length;
    let i: number = 0, j: number = 0;
    let result: boolean = false;
    // 遍历行首元素
    while (matrix[i] && target >= matrix[i][j] && i < row) {
        i++
    }
    // 处理边界问题
    // 边界头部
    if (i === 0 && target < matrix[i][j]) {
        return result
    }
    // 边界尾部
    if (i === row && target > matrix[row - 1][col - 1]) {
        return result
    }
    if (i !== 0) {
        i--
    }
    // 遍历对应列元素
    while (j < col) {
        if (matrix[i][j] === target) {
            result = true
            break
        }
        if (target < matrix[i][j]) {
            break
        }
        j++;
    }
    return result
};

/**
 * 优化：
 * 二分查找
 * @param matrix 
 * @param target 
 * @returns 
 */
// function searchMatrix(matrix: number[][], target: number): boolean {
//     const row: number = matrix.length;
//     const col: number = matrix[0].length;
//     let leftRow: number = 0, rightRow: number = row - 1;
//     let leftCol: number = 0, rightCol: number = col - 1;
//     let result: boolean = false;
//     let targetRow: number = 0, targetCol: number = 0;
//     let midCol = (leftCol + rightCol) >> 1;
//     // 二分查找
//     while (leftRow < rightRow) {
//         let midRow = (leftRow + rightRow) >> 1;
//         if (target > matrix[midRow][0]) {
//             leftRow = midRow;
//         } else {
//             rightRow = midRow;
//         }
//     }
//     if ()
//         while (j < col) {
//             if (target < matrix[i][j]) {
//                 break
//             }
//             if (matrix[i][j] === target) {
//                 result = true
//                 break
//             }
//             j++;
//         }
//     return result
// };


// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3;
// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 61
// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
let matrix = [[1], [3]], target = 3
// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 0
console.log(searchMatrix(matrix, target))