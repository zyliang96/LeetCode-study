/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * 思路：二进制计算出每个的位置数
 * @param n 
 * @returns 
 */
// function hammingWeight(n: number): number {
//     let len = 32;
//     let result = 0
//     for (let i = 0; i < len; i++) {
//         // 无符号右移指定位，然后和1做与运算，得到的就是对应位置上的二进制数
//         const num = (n >>> i) & 1;
//         if (num === 1) {
//             result++
//         }
//     }
//     return result
// };

/**
 * 这个思路很巧妙，n 和 n - 1 做与运算，则会将最低位的1置为0，因为n-1会导致最低位的1被借位，置为了0，所以与操作之后，最低位的1就变为了0
 * 循环到n整体为0的时候，就说明原数没有位为1了
 * @param n 
 * @returns 
 */
function hammingWeight(n: number): number {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ret++;
    }
    return ret;
};

// @lc code=end

