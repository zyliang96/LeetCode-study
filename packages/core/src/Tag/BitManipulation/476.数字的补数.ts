/*
 * @lc app=leetcode.cn id=476 lang=typescript
 *
 * [476] 数字的补数
 */

/**
 * 思路：
 * 1、找到最高位的1，假设为k,然后和2^(k+1)次-1，即k个1做异或，然后就得出补数了
 * @param num 
 * @returns 
 */
// @lc code=start
// function findComplement(num: number): number {
//     let highbit = 0;
//     for (let i = 1; i <= 30; ++i) {
//         if (num >= 1 << i) {
//             highbit = i;
//         } else {
//             break;
//         }
//     }
//     const mask = highbit == 30 ? 0x7fffffff : (1 << (highbit + 1)) - 1;
//     return num ^ mask;
// };

/**
 * 数学方法比较好理解
 * 假设数num 的部署为 res , num的最高位为k位 那么 num + res = 2 ^ (k + 1) - 1
 * @param num 
 */
function findComplement(num: number): number {
    let a = 1;
    while (true) {
        if (num >= a) {
            // 这里需要考虑的是边界情况
            a = (a << 1) >>> 0;
        } else {
            return a - num - 1;
        }
    }
};
// @lc code=end

