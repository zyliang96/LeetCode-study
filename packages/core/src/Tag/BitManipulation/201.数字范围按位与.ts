/*
 * @lc app=leetcode.cn id=201 lang=typescript
 *
 * [201] 数字范围按位与
 */

/**
 * 思路：
 * 很有意思的一道题，实际上解读题很关键，数字范围的按位与操作，实际本质是求两个数的公共前置位，因为任何位存在0都会为0,
 * 所以这就直接将问题降级，这里有两种解法，和191题类似,这里需要注意一下边界问题，因为值是2^31 -1 ,所以不存在符号位问题，
 * 否则需要考虑左移的符号偏移问题
 * @param left 
 * @param right 
 */


/**
 * 按位计算
 * @param left 
 * @param right 
 */
// @lc code=start
function rangeBitwiseAnd(left: number, right: number): number {
    let num = 0;
    while (left < right) {
        left >>= 1;
        right >>= 1;
        num++
    }
    // 这里是做一个额外的处理，避免数据左移后符号位引起问题，所以无符号右移0位，是数据变成无符号数
    return left << num >>> 0
};

/**
 * Brian Kernighan 算法
 * 这个思路很巧妙，n 和 n - 1 做与运算，则会将最低位的1置为0，因为n-1会导致最低位的1被借位，置为了0，所以与操作之后，最低位的1就变为了0
 * 循环到n整体为0的时候，就说明原数没有位为1了
 * @param left 
 * @param right 
 * @returns 
 */
// function rangeBitwiseAnd(left: number, right: number): number {
//     while (left < right) {
//         right &= right - 1;
//     }
//     return right
// };
// @lc code=end

