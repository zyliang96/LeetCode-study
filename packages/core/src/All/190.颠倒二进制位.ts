/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
    let len = 32;
    let result = 0
    for (let i = 0; i < len; i++) {
        // 无符号右移指定位，然后和1做与运算，得到的就是对应位置上的二进制数
        const num = (n >>> i) & 1;
        // 因为 js 位运算只有32位，并且最高位为符号位，所以左移后需要再无符号右移一位来转换成无符号值
        result += num << (len - i - 1) >>> 0
    }
    return result
};
// @lc code=end