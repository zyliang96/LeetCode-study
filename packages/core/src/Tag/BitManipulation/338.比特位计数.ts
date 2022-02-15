/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */


/**
 * 思路：
 * 时间复杂度为 O(n log n) ，遍历每一个数的1的个数
 * @param n 
 * @returns 
 */
// @lc code=start
// function countBits(n: number): number[] {
//     let result = [0];
//     for (let i = 1; i <= n; i++) {
//         let data = i
//         let num = 0;
//         while (data) {
//             data &= data - 1;
//             num++
//         }
//         result.push(num)
//     }
//     return result
// };
/**
 * 动态规划——最高有效位
 * 这个考虑的巧妙点在于，在确定了最高位之后，实际上后面的位数都是之前已经计算过的，结果只要加上最高位多出来的1即可
 * @param n 
 * @returns 
 */
// function countBits(n: number): number[] {
//     let result = [0];
//     let heightBit = 0
//     for (let i = 1; i <= n; i++) {
//         if ((i & (i - 1)) === 0) {
//             heightBit = i
//         }
//         result.push(result[i - heightBit] + 1)
//     }
//     return result
// };

/**
 * 动态规划——最低有效位
 * 就是反过来考虑
 * @param n 
 * @returns 
 */
// function countBits(n: number): number[] {
//     let result = [0];
//     for (let i = 1; i <= n; i++) {
//         // i & 1用于判断是技术还是偶数，如果i本身是偶数，那么就直接用x / 2的值即可，如果是奇数则再 x / 2 上加一即可
//         result.push(result[i >> 1] + (i & 1))
//     }
//     return result
// };

/**
 * 动态规划——最低设置位
 * 这个实际上是在方法一的基础上，进行的优化处理
 * @param n 
 * @returns 
 */
function countBits(n: number): number[] {
    let result = [0];
    for (let i = 1; i <= n; i++) {
        // i & 1用于判断是技术还是偶数，如果i本身是偶数，那么就直接用x / 2的值即可，如果是奇数则再 x / 2 上加一即可
        result.push(result[i & (i - 1)] + 1)
    }
    return result
};
// @lc code=end

