/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

/**
 * 思路：
 * 二进制实现，实际上数组中的每一个元素对应的是一个二进制位，3个数就有3个二进制位
 * 所以只要对应二进制位上情况都列举一遍即可
 * @param nums 
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const len: number = nums.length;
    // 不能超过1 左移数组长度的值，二进制转换
    const max = 1 << len;
    for (let i = 0; i < max; i++) {
        const t = [];
        for (let j = 0; j < len; j++) {
            if (i & (1 << j)) {
                t.push(nums[j])
            }
        }
        result.push(t)
    }
    return result
};
// @lc code=end

