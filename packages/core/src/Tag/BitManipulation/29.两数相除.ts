/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

/**
 * 思路：
 * 从题目描述中可以看出，这里求的商实际上是可以整除的数据，那么实际上可以整除
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
        // 因为不能使用乘除和mod，所以这里用加法代替，这里是将2倍的被除数加入到队列中，实际上将数组中的数相加，就是可以整除的数据总数
        candidates.push(candidates[index] + candidates[index]);
        ++index;
    }
    let ans = 0;
    // 这里的位运算很巧妙，因为之前计算的时候，都是通过2倍计算的，实际上第i个值是第i-1个值的2倍，是弟i-2个值的4倍，以此类推，实际上从后往前，就是2进制对应位置的值
    // 举例：11 / 3 ， 数组中只有 3， 6 ， 6的位置是1，二进制中就是2的1次方位置处的值，1 像左偏移1个单位
    for (let i = candidates.length - 1; i >= 0; --i) {
        if (candidates[i] >= dividend) {
            ans += 1 << i;
            dividend -= candidates[i];
        }
    }

    return rev ? -ans : ans;
};
// @lc code=end

