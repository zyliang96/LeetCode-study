/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * 思路：32位，计算出每一位然后移动
 * @param n 
 * @returns 
 */
// function reverseBits(n: number): number {
//     let len = 32;
//     let result = 0
//     for (let i = 0; i < len; i++) {
//         // 无符号右移指定位，然后和1做与运算，得到的就是对应位置上的二进制数
//         const num = (n >>> i) & 1;
//         // 因为 js 位运算只有32位，并且最高位为符号位，所以左移后需要再无符号右移一位来转换成无符号值
//         result += num << (len - i - 1) >>> 0
//     }
//     return result
// };


// function reverseBits(n: number): number {
//     let rev = 0;
//     for (let i = 0; i < 32 && n > 0; ++i) {
//         rev |= (n & 1) << (31 - i);
//         n >>>= 1;
//     }
//     return rev >>> 0;
// };


/**
 * 位运算分治法
 * TODO 这里后续再考虑一下
 * @param n 
 * @returns 
 */
function reverseBits(n: number): number {
                        
    const M1 = 0x55555555; // 01010101010101010101010101010101
    const M2 = 0x33333333; // 00110011001100110011001100110011
    const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
    const M8 = 0x00ff00ff; // 00000000111111110000000011111111

    n = n >>> 1 & M1 | (n & M1) << 1;
    n = n >>> 2 & M2 | (n & M2) << 2;
    n = n >>> 4 & M4 | (n & M4) << 4;
    n = n >>> 8 & M8 | (n & M8) << 8;
    return (n >>> 16 | n << 16) >>> 0;
};
// @lc code=end