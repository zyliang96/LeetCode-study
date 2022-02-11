/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

/**
 * 常用的方法有hashmap、数据集合、数据集合中数据的2倍-数组和，但是都需要O(n)的空间
 * 位运算的方法：使用异或操作符
 * 性质：
 * 1、任何数和自身异或都是0
 * 2、任何数和0异或都是任何数
 * 3、异或满足交换律、结合律
 * 所以可以得出：对于当前题目而言，只有一个数单独存在，其他数都成对存在
 * 使用交换律和结合律可以得出
 * (a1 ^ a1') ^ (a2 ^ a2') ... (aN ^ aN') ^ aM = aM
 * @param nums 
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let r = 0;
    for(let i =0,len = nums.length;i<len;i++){
        r ^= nums[i]
    }
    return r
};
// @lc code=end

