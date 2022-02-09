/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

/**
 * 
 * @param dividend 被除数
 * @param divisor 除数
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
    const MAX_VALUE = 2 ** 31 - 1, MIN_VALUE = -(2 ** 31);
    // 考虑被除数为最小值的情况
    if (dividend === MIN_VALUE) {
        // 被除数为最小的时候，如果除数是1，则值为被除数即最小值，
        if (divisor === 1) {
            return MIN_VALUE;
        }
        // 除数为-1的时候，值为被除数取反，（实际上是2 ** 31 ，但是超出了本题区间，）
        if (divisor === -1) {
            return MAX_VALUE;
        }
    }
    // 考虑除数为最小值的情况
    if (divisor === MIN_VALUE) {
        return dividend === MIN_VALUE ? 1 : 0;
    }
    // 考虑被除数为 0 的情况
    if (dividend === 0) {
        return 0;
    }
    
    // 一般情况，使用类二分查找
    // 将所有的正数取相反数，这样就只需要考虑一种情况
    let rev = false;
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    if (divisor > 0) {
        divisor = -divisor;
        rev = !rev;
    }

    const candidates = [divisor];
    let index = 0;
    // 注意溢出
    while (candidates[index] >= dividend - candidates[index]) {
        candidates.push(candidates[index] + candidates[index]);
        ++index;
    }
    let ans = 0;
    for (let i = candidates.length - 1; i >= 0; --i) {
        if (candidates[i] >= dividend) {
            ans += 1 << i;
            dividend -= candidates[i];
        }
    }

    return rev ? -ans : ans;
};
// @lc code=end

