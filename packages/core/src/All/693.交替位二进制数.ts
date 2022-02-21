/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * [693] 交替位二进制数
 */

/**
 * 思路：
 * 1、这个数右移一位然后和自身异或的结果+1，如果满足是2的幂，那么就说明这个数是交替位二进制数
 * @param n 
 */

// @lc code=start
// function hasAlternatingBits(n: number): boolean {
//     // 
//     let num = (n ^ (n >> 1)) + 1;
//     return (num & (num - 1)) === 0;
// };

/**
 * 思路：
 * 这个就是判断是否存在连续的进制位
 * @param n 
 * @returns 
 */
function hasAlternatingBits(n: number): boolean {
    let last = 0;
    while (n) {
        last = n & 1;
        n >>= 1;
        if (n && (n & 1) === last) {
            return false
        }
    }
    return true
};

// @lc code=end

