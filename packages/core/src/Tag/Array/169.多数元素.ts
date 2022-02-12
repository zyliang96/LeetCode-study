/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

/**
 * 首先想到的思路
 * 1、哈希表，需要使用额外的空间来实现时间复杂度O(n),空间复杂度O(n)
 * 2、排序实现，因为重数个数过半，所以排序后，一定存在中间值是众数的情况，时间复杂度O(nlogn)
 * 3、Boyer-Moore 投票算法
 * 这个算法的基础是，众数的个数一定比其他说多，如果我们把众数记为+1，其他数记为-1，那么全部加起来一定大于0，
 * 所以我们维护一个候选众数candidate 和它出现的次数count，如果下一个值和candidate 相等则+1，不相等时，如果count为0，则candidate 变为下一个值，count+1，否则count-1
 * 这样到最后的时候，候选众数一定是candidate 的那个值
 * @param nums 
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        // 如果不相等
        if (candidate !== nums[i]) {
            // 为0的时候替换，但是count同时加1
            if (count === 0) {
                count++;
                candidate = nums[i]
            } else {
                // 不为0的时候减1
                count--
            }
        } else {
            // 相等计数加1
            count++;
        }
    }
    return candidate;
};
// @lc code=end

