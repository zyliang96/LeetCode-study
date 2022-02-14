/*
 * @lc app=leetcode.cn id=260 lang=typescript
 *
 * [260] 只出现一次的数字 III
 */

/**
 * 最好考虑的应该是哈希表的形式，但是首先应该好好读一下提，数组中只有两个是不一样的
 * @param nums 
 */
// @lc code=start

/**
 * 1、哈希表
 * @param nums 
 * @returns 
 */
// function singleNumber(nums: number[]): number[] {
//     const freq = new Map();
//     for (const num of nums) {
//         freq.set(num, (freq.get(num) || 0) + 1);
//     }
//     const ans: number[] = [];
//     for (const [num, occ] of freq.entries()) {
//         if (occ === 1) {
//             ans.push(num);
//         }
//     }
//     return ans;
// };

/**
 * 这个想法也很巧妙，但是有一个很重要的前提，就是只有两个不一样的
 * 这个想法是，对所有的值进行异或操作后，可以得出不一样的数异或之后的结果，就是这两个值异或的结果，那么通过 n & (-n)实际上就可以求出最低位为1的值，需要注意的是，n & (-n)只能知道最低位的1在哪里
 * 这样就可以将整个数组分成两个部分，一部分是上述得出的二进制位上一样为1的，另一个是二进制位上为0的，这样再求异或就可以得出具体的结果值
 * @param nums 
 * @returns 
 */
function singleNumber(nums: number[]): number[] {
    let xorsum = 0;
    // 整体求异或
    for (const num of nums) {
        xorsum ^= num;
    }
    let type1 = 0, type2 = 0;
    // 找出两个数二进制位中第一个不同的位置
    const lsb = xorsum & (-xorsum);
    // 再次分组求异或，从而得到具体的值
    for (const num of nums) {
        if (num & lsb) {
            type1 ^= num;
        } else {
            type2 ^= num;
        }
    }
    return [type1, type2];
};
// @lc code=end

