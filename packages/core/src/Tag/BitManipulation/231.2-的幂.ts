/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

/**
 * 思路：
 * 2的幂实际上应该是求2进制位上，只有一个位的值为1的场景，这里需要注意的是，n只有大于等于0的情况下才是2的幂，因为2^x只一个永远大于0的数
 * @param n 
 */

/**
 * 1、利用Brian Kernighan 算法判断
 * @param n 
 */
// @lc code=start
// function isPowerOfTwo(n: number): boolean {
//     let num = 0;
//     // 先进行无符号右移，去除符号影响
//     if (n < 0) {
//         return false
//     }
//     while (n) {
//         n &= n - 1;
//         num++
//         if (num > 1) {
//             return false
//         }
//     }
//     return num === 1

// };

// function isPowerOfTwo(n: number): boolean {
//     // 这个是Brian Kernighan 算法判断
//     return n > 0 && ((n & (n - 1)) === 0)
//     // 这个是通过 -n 和n 的区别在于，高位相反，低位相同
//     return n > 0 && (n & -n) === n;
// };


/**
 * 2、在题目给定的 3232 位有符号整数的范围内，只需要判断 n 是否是2^30 次方的约数即可
 * @param n 
 * @returns 
 */
function isPowerOfTwo(n: number): boolean {
    const BIG = 1 << 30;
    return n > 0 && BIG % n === 0;
};


// @lc code=end

