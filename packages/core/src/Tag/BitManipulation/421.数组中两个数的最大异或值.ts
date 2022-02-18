/*
 * @lc app=leetcode.cn id=421 lang=typescript
 *
 * [421] 数组中两个数的最大异或值
 */

/**
 * 思路：
 * 1、最简单的就是暴力求解，直接双循环遍历求解O(n^2)
 * 2、逐步确定最高位，这个的理论实际上是这样的，假设存在一个值C,满足 数组中的两个数 A ^ B = C 是数组中最大的异或值，那么可以得出，A ^ C = B, B ^ C = A 
 * 所以根据这个设定，按照从高位到低位的逻辑，确定每一个位的合理值，如果存在这样的数据，则说明这位为1，否则为0。为什么从高位是因为，取最大值，所以应该优先满足高位为1
 * @param nums 
 */
// 答案写法
// @lc code=start
function findMaximumXOR(nums: number[]): number {
    const HIGH_BIT = 30;
    let x = 0;
    for (let k = HIGH_BIT; k >= 0; --k) {
        const seen = new Set();
        // 将所有的 pre^k(a_j) 放入哈希表中
        for (const num of nums) {
            // 如果只想保留从最高位开始到第 k 个二进制位为止的部分
            // 只需将其右移 k 位
            seen.add(num >> k);
        }

        // 目前 x 包含从最高位开始到第 k+1 个二进制位为止的部分
        // 我们将 x 的第 k 个二进制位置为 1，即为 x = x*2+1
        const xNext = x * 2 + 1;
        let found = false;

        // 枚举 i
        for (const num of nums) {
            if (seen.has(xNext ^ (num >> k))) {
                found = true;
                break;
            }
        }

        if (found) {
            x = xNext;
        } else {
            // 如果没有找到满足等式的 a_i 和 a_j，那么 x 的第 k 个二进制位只能为 0
            // 即为 x = x*2
            x = xNext - 1;
        }
    }
    return x;
};


/**
 * TODO 字典数，这个还没看懂，后续补充
 * @param nums 
 * @returns 
 */
// function findMaximumXOR(nums: number[]): number {
  
// };
// @lc code=end

