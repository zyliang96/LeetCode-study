/*
 * @lc app=leetcode.cn id=397 lang=typescript
 *
 * [397] 整数替换
 */
/**
 * 思路：
 * 这道题应该是考虑在什么情况下使用+1什么情况下使用-1操作
 * @param n 
 * @returns 
 */
// @lc code=start
function integerReplacement(n: number): number {
    let count = 0;
    while (n !== 1) {
        // console.log(n.toString(2))
        if (n & 1) {
            // 这里要分两种情况处理，在低位连续的1的时候，执行+1操作，在低位只有一个1的时候执行-1操作

            // 让n 和 3 做与操作实际上是为了判断低位1的个数是否超过1个，大于3的数，如果超过1个，则最优方案是执行+1操作
            if ((n & 3) === 3 && n > 3) {
                n += 1;
            } else {
                n -= 1;
            }
            n >>>= 1
            count += 2
        } else {
            n = n >>> 1
            count++
        }
        // console.log(n)
    }
    return count
};

/**
 * 枚举所有可能性
 * @param n
 * @returns
 */
// function integerReplacement(n: number): number {
//     // n 为 1的时候，直接return
//     if (n === 1) {
//         return 0;
//     }
//     // 偶数的时候，位移1 加上 n /2后续可能的次数
//     if (n % 2 === 0) {
//         return 1 + integerReplacement(Math.floor(n / 2));
//     }
//     return 2 + Math.min(integerReplacement(Math.floor(n / 2)), integerReplacement(Math.floor(n / 2) + 1));
// };

/**
 * 记忆化搜索
 * 1的翻版，只是减少重复计算
 * @param n
 * @returns
 */
// const memo = new Map();
// function integerReplacement(n: number): number {
//     if (n === 1) {
//         return 0;
//     }
//     if (!memo.has(n)) {
//         if (n % 2 === 0) {
//             memo.set(n, 1 + integerReplacement(Math.floor(n / 2)));
//         } else {
//             memo.set(n, 2 + Math.min(integerReplacement(Math.floor(n / 2)), integerReplacement(Math.floor(n / 2) + 1)));
//         }
//     }
//     return memo.get(n);
// };


/**
 *
 * @param n
 * @returns
 */
// function integerReplacement(n: number): number {
//     let ans = 0;
//     while (n !== 1) {
//         if (n % 2 === 0) {
//             ++ans;
//             n = Math.floor(n / 2);
//         } else if (n % 4 === 1) {
//             ans += 2;
//             n = Math.floor(n / 2);
//         } else {
//             // 这里是计算奇数的情况

//             // n === 3 的时候，-1计算是最快的，只需2步
//             if (n === 3) {
//                 ans += 2;
//                 n = 1;
//             } else {
//                 // 否则执行+1计算，这个时候就需要
//                 ans += 2;
//                 n = Math.floor(n / 2) + 1;
//             }
//         }
//     }
//     return ans;
// };
// console.log(integerReplacement(2147483647))
// @lc code=end

