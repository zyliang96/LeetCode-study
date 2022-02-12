/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

/**
 * 思路1：最容易想到的实现时hash表
 */
// @lc code=start
/**
 * 思路2：依次确定每一个二进制位
 * 这个想法取巧的点在于，提前知道了数的范围，然后去判断每一位的值，因为除答案外其他的元素都是3次，所以每一个位置必定是0或3
 * 这样只要对每一位都进行对 3 取余数，剩下的值即是答案对应位上的值
 * 注意：这个会有很多多余的运算
 */
// function singleNumber(nums: number[]): number {
//     let ans = 0;
//     for (let i = 0; i < 32; i++) {
//         let total = 0;
//         for (const num of nums) {
//             // 这里很巧妙，向右偏移指定位，然后和1做与运算，得到的值是当前位上的数值和
//             total += ((num >> i) & 1);
//         }
//         // 得出的总数，是包含了任意3倍+单个数的，所以在取3的余数的时候，不能整除，那么对应位的值为1，
//         if (total % 3 != 0) {
//             ans |= (1 << i);
//         }
//     }
//     return ans
// };

/**
 * 思路3：
 * TODO 这个回去再思考一下
 */


function singleNumber(nums: number[]): number {
    let a = 0, b = 0;
    for (const num of nums) {
        const aNext = (~a & b & num) | (a & ~b & ~num), bNext = ~a & (b ^ num);
        a = aNext;
        b = bNext;
    }
    return b;
};


function singleNumber(nums: number[]): number {
    let a = 0, b = 0;
    for (const num of nums) {
        b = ~a & (b ^ num);
        a = ~b & (a ^ num);
    }
    return b;
};






// @lc code=end

