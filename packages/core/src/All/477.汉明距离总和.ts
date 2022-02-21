/*
 * @lc app=leetcode.cn id=477 lang=typescript
 *
 * [477] 汉明距离总和
 */

/**
 * 思路：
 * 1、最容易想到的方法应该是通过双层循环遍历，然后累加每一次的汉明距离
 * @param nums 
 */
// @lc code=start
// function totalHammingDistance(nums: number[]): number {
//     let sum = 0;
//     const len = nums.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             sum += bitCount(nums[i] ^ nums[j])
//         }
//     }
//     return sum
// };

/**
 * java中计算数字1的个数的方法
 * @param x 
 * @param y 
 * @returns 
 */
function bitCount(i: number): number {
    // 0b 二进制 0x 十六进制 0o 八进制 0d 十进制
    // 0x55555555; 01010101010101010101010101010101
    // 0x33333333; 00110011001100110011001100110011
    // 0x0f0f0f0f; 00001111000011110000111100001111
    // 0x00ff00ff; 00000000111111110000000011111111

    /**
     * 二进制数  个数
     *   00      00
     *   01      01
     *   10      01
     *   11      10 
     */
    // 第一步 实际上是用2个位置来计算2个为一组，其中1的个数，然后没两位表示这两位1的个数
    i = i - ((i >>> 1) & 0x55555555);
    // console.log(i.toString(2))
    // 第二步 实际上是在第一步的基础上，由于计算出了每两位的值，所以此时再次计算的时候，实际上就是将按照2位分的加起来，计算每四位的值
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    // console.log(i.toString(2))
    // 第三步 在第二步的基础上，将每四位的值相加，因为四位对多是8个1，所以需要和0x0f0f0f0f做与操作，从而得出实际的数量，计算出的是每8个的值
    i = (i + (i >>> 4)) & 0x0f0f0f0f;
    // console.log(i.toString(2))
    // 第四步 在第三步的基础上，得出没16个的值，因为16个最多是16，也就是5位，这里已经8位了，所以不需要再进行做与操作了，直接计算出每16个的值
    i = i + (i >>> 8);
    // console.log(i.toString(2))
    // 第五步 计算出每32个的值，这是得到的就是具体的和是没32个的值
    i = i + (i >>> 16);

    // 最后一步
    // console.log(i.toString(2))
    // console.log(i & 0x3f)
    // 因为在合成16个的时候，实际位用了8位，但是8位还有遗留，所以只有最低位是满足条件的，用0x3f,是因为整数最多32位，所以用6位来计算即可
    return i & 0x3f;
};


/**
 * 思路：
 * 计算每一位1的个数，因为计算总和，那么实际上计算每一位对应1的个数即可得出综合，因为任意两个都需要进行异或操作
 * @param nums 
 * @returns 
 */
function totalHammingDistance(nums: number[]): number {
    let sum = 0;
    const len = nums.length;
    let L = 31;
    for (let i = 0; i < L; i++) {
        let count = 0
        for (let j = 0; j < len; j++) {
            count += (nums[j] >> i) & 1
        }
        // 汉明距离是两个数的二进制数对应位不同的数量
        sum += (len - count) * count;
    }
    return sum
};
// @lc code=end

