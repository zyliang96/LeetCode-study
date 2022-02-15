/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

/**
 * 思路：
 * 最简单的就是和指定位比较
 * @param n 
 */
// @lc code=start
// function isPowerOfFour(n: number): boolean {
//     if (n < 0) {
//         return false
//     }
//     for (let i = 0; i < 16; i++) {
//         const data = 1 << (2 * i);
//         if(data > n){
//             break
//         }
//         if ((n | data) === data) {
//             return true
//         }
//     }
//     return false
// };

/**
 * 这个就是判断首先满足2的幂的条件，然后偶数位上不能有1
 * 0xaaaaaaaa = 10101010101010101010101010101010 
 * @param n 
 * @returns 
 */
// function isPowerOfFour(n: number): boolean {
//     return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
// };

/**
 * 取模性质
 * 这里需要通过数学公式推导一下，(a+b)^ n 实际上是 C(n,0)a^n+C(n,1)a^(n-1)b+....
 * 4的幂，可以拆解为(3 + 1)的幂,这样实际上4的幂模3，则恒等于1，
 * 4的幂，必定是 2的幂，2的幂模3，余数为2，所以只有在满足2的幂的前提下，并且模3等于1的才是4的幂
 * @param n 
 * @returns 
 */
function isPowerOfFour(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};


// @lc code=end

