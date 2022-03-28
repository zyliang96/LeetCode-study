/*
 * @lc app=leetcode.cn id=440 lang=typescript
 *
 * [440] 字典序的第K小数字
 */

/**
 * 思路：
 * 1、字典序，首先字典序应该是有一个前缀的，一开始的第一个字典序的前缀应该是1，
 * 2、用一个字段记录前缀，根据需要的第几个字段去
 * @param n 
 * @param k 
 * @returns 
 */

function findKthNumber(n: number, k: number): number {
    // 计算当前字典序中存在的数的个数，这个地方从树的角度考虑，更容易一点，
    let getCount = (prefix, n) => {
        let count = 0;
        for (let i = prefix, next = prefix + 1; i <= n; i *= 10, next *= 10) {
            count += Math.min(next, n + 1) - i
        }
        return count
    }
    let p = 1;
    let prefix = 1;
    // 当 当前位置比k小的时候，就需要判断k是否在当前字典序里，
    while (p < k) {
        const count = getCount(prefix, n)
        // p + count 比 当前位置大的时候，说明在当前的字典序中，这个是从第一层过滤的
        if (p + count > k) {
            prefix *= 10;
            p++;
        } else {
            prefix++;
            p += count;
        }
    }
    return prefix
};



// 官方答案
// @lc code=start
// function findKthNumber(n: number, k: number): number {
//     let getCount = (prefix, n) => {
//         let count = 0;
//         for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10)
//             count += Math.min(next, n + 1) - cur;
//         return count;
//     }
//     let p = 1;
//     let prefix = 1;
//     while (p < k) {
//         let count = getCount(prefix, n);
//         if (p + count > k) {
//             prefix *= 10;
//             p++;
//         } else if (p + count <= k) {
//             prefix++;
//             p += count;
//         }
//     }
//     return prefix;
// };
// @lc code=end

