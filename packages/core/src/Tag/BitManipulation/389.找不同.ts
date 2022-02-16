/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 */

/**
 * 思路：
 * 因为都是由小写字母组成，所以可以将字符转换成对应的二进制
 * @param s 
 * @param t 
 */

// const mapData = (function () {
//     let map = new Map();
//     let isInit = false
//     return () => {
//         if (isInit) {
//             return map
//         }
//         let startCode = 'a'.charCodeAt(0);
//         let endCode = 'z'.charCodeAt(0);
//         for (let i = startCode; i < endCode; i++) {
//             map.set(1 << (i - startCode), String.fromCharCode(i))
//         }
//         isInit = true
//         return map
//     }
// })()

/**
 * 这个思路有点复杂了，而且消耗了额外的空间
 * @param s 
 * @param t 
 * @returns 
 */
// @lc code=start
// function findTheDifference(s: string, t: string): string {
//     let sNum = 0xffff;
//     let tNum = 0xffff;
//     let baseNum = 'a'.charCodeAt(0)
//     let map = new Map();
//     for (let i of s) {
//         const data = 1 << (i.charCodeAt(0) - baseNum)
//         if (!map.get(data)) {
//             map.set(data, i)
//         }
//         sNum ^= data
//     }
//     for (let i of t) {
//         const data = 1 << (i.charCodeAt(0) - baseNum)
//         if (!map.get(data)) {
//             map.set(data, i)
//         }
//         tNum ^= data
//     }
//     return map.get(sNum ^ tNum)

// };


/**
 * 计数计算
 * @param s 
 * @param t 
 * @returns 
 */
// function findTheDifference(s: string, t: string): string {
//     const cnt = new Array(26).fill(0);
//     for (const ch of s) {
//         cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }
//     for (const ch of t) {
//         cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
//         if (cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
//             return ch;
//         }
//     }
//     return ' ';
// };


/**
 * 用Ascii码计算，两个字符串ASCII码的差就是对应的字符
 * @param s
 * @param t
 * @returns
 */
// function findTheDifference(s: string, t: string): string {
//     let as = 0, at = 0;
//     for (let i = 0; i < s.length; i++) {
//         as += s[i].charCodeAt(0);
//     }
//     for (let i = 0; i < t.length; i++) {
//         at += t[i].charCodeAt(0);
//     }
//     return String.fromCharCode(at - as);
// };

/**
 * 这个位运算简洁明了，实际上就是利用了136中出现一次的逻辑，两个字符串做异或，单数的那个最后剩下的值
 * @param s
 * @param t
 * @returns
 */
function findTheDifference(s: string, t: string): string {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt(0);
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt(0);
    }
    return String.fromCharCode(ret);
};
// @lc code=end

