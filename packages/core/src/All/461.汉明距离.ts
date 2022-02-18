/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */
/**
 * 思路：
 * 1、这个题感觉很简单，只要两个值做异或运算，然后求1的个数即可
 * @param x 
 * @param y 
 */
// @lc code=start
function hammingDistance(x: number, y: number): number {
    let n = x ^ y;
    let count = 0;
    while (n) {
        n &= n - 1;
        count++
    }
    return count
};
// @lc code=end

