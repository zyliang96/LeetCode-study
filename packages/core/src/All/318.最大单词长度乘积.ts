/*
 * @lc app=leetcode.cn id=318 lang=typescript
 *
 * [318] 最大单词长度乘积
 */

/**
 * 思路：
 * 都是小写字母，小写字母总共26个，那么如果使用二进制，每一个字母站一位，则对应26位，然后做与运算值为0的则是满足条件的
 * 
 * @param words 
 */

// @lc code=start
// function maxProduct(words: string[]): number {
//     const aAsciiNum = 'a'.charCodeAt(0);
//     const len = words.length
//     let list = []
//     // 循环求出二进制表示的数组
//     for (let i = 0; i < len; i++) {
//         let result = 0
//         const data = words[i]
//         for (let word of data) {
//             result |= 1 << (word.charCodeAt(0) - aAsciiNum)
//         }
//         list.push(result)
//     }
//     // 双层循环，确定所求值的最大值
//     let maxNum = 0
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             // 说明没有重复单词
//             if ((list[i] & list[j]) === 0) {
//                 maxNum = Math.max(maxNum, words[i].length * words[j].length)
//             }
//         }
//     }
//     return maxNum
// };

/**
 * 位运算优化
 * @param words 
 * @returns 
 */
function maxProduct(words: string[]): number {
    const map = new Map();
    const length = words.length;
    for (let i = 0; i < length; i++) {
        let mask = 0;
        const word = words[i];
        const wordLength = word.length;
        for (let j = 0; j < wordLength; j++) {
            mask |= 1 << (word[j].charCodeAt(0) - 'a'.charCodeAt(0));
        }
        // 这一步优化的是带有重复字符的单词，比如aaa，aa，a,这种，实际上只要记录长度最长的那个即可
        if (wordLength > (map.get(mask) || 0)) {
            map.set(mask, wordLength);
        }
    }
    let maxProd = 0;
    const maskSet = Array.from(map.keys());
    // 遍历map，减少了重复字符单词的数据比较
    for (const mask1 of maskSet) {
        const wordLength1 = map.get(mask1);
        for (const mask2 of maskSet) {
            // 这里没有过滤掉本身，但是a & a = a
            if ((mask1 & mask2) === 0) {
                const wordLength2 = map.get(mask2);
                maxProd = Math.max(maxProd, wordLength1 * wordLength2);
            }
        }
    }
    return maxProd;
};

// @lc code=end

