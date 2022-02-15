/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 */

/**
 * 这个方法巧妙的点在于，两个数相加，a ^ b 得出的是不进位的值，a & b 得出的是需要进位的值，需要进位的则只有左移一位
 * 然后循环执行，知道不需要进位的时候，相加完成
 * @param a 
 * @param b 
 * @returns 
 */
// @lc code=start
function getSum(a: number, b: number): number {
    while (b != 0) {
        const carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
};
// @lc code=end

