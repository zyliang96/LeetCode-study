/*
 * @lc app=leetcode.cn id=405 lang=typescript
 *
 * [405] 数字转换为十六进制数
 */

/**
 * 思路：
 * 因为负数存在，无符号右移
 * @param num 
 */
// @lc code=start
function toHex(num: number): string {
    if (num === 0) {
        return '0'
    }
    let list = []
    while (num) {
        const val = num & 0xf;
        num >>>= 4
        const digit = val < 10 ? String.fromCharCode('0'.charCodeAt(0) + val) : String.fromCharCode('a'.charCodeAt(0) + val - 10);
        list.unshift(digit)
    }
    return list.join('')

};

// function toHexOne(num: number): string {
//     if (num === 0) {
//         return "0";
//     }
//     const sb = [];
//     for (let i = 7; i >= 0; i--) {
//         const val = (num >> (4 * i)) & 0xf;
//         if (sb.length > 0 || val > 0) {
//             const digit = val < 10 ? String.fromCharCode('0'.charCodeAt(0) + val) : String.fromCharCode('a'.charCodeAt(0) + val - 10);
//             sb.push(digit);
//         }
//     }
//     return sb.join('');

// }
// console.log(toHex(-1))
// console.log(toHexOne(-1))

// @lc code=end

