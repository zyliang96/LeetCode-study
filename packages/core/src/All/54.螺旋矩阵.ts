/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    // 处理边界问题
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    let list = [];
    let left = 0,
        right = matrix[0].length,
        top = 0,
        bottom = matrix.length;
    while(left < right && top < bottom){
        for(let i = left;i < right;i++){
            
        }
    }    
}
// @lc code=end
