/*
 * @lc app=leetcode.cn id=393 lang=typescript
 *
 * [393] UTF-8 编码验证
 */

/**
 * 思路：
 * 实际上缴就是比较判断是几字节的编码，然后判断编码位的数据是否满足0b10000000的判断，
 * 这里判断10开头的时候，需要同时判断是否和11开头的比较仍为10，否则会误判，在判断是几字节的时候，同样有这个问题
 * @param data 
 * @returns 
 */
// @lc code=start
// function validUtf8(data: number[]): boolean {
//     let one = 0b10000000; // 1字节
//     let two = one | 0b01000000; // 2字节
//     let three = two | 0b00100000; // 3字节
//     let four = three | 0b00010000; // 4字节
//     let five = four | 0b00001000;
//     let i = 0, len = data.length;
//     while (i < len) {
//         const num = data[i];
//         let end = 0
//         // 一字节
//         if ((num & one) === 0) {
//             end = 1
//         }
//         // 二字节
//         if ((num & two) === two && (num & three) === two) {
//             end = 2
//         }
//         // 三字节
//         if ((num & three) === three && (num & four) === three) {
//             end = 3
//         }
//         // 四字节
//         if ((num & four) === four && (num & five) === four) {
//             end = 4
//         }
//         // console.log(end)
//         // console.log(num.toString(2))
//         for (let j = i + 1, len = i + end; j < len; j++) {
//             // console.log(data[j].toString(2))
//             if ((data[j] & one) !== one || (data[j] & two) !== one) {
//                 return false
//             }
//         }
//         if (end === 0) {
//             return false
//         }
//         i = i + end
//     }
//     return true
// };



function validUtf8(data: number[]): boolean {
    let one = 0b10000000; // 1字节
    let two = one | 0b01000000; // 2字节
    let i = 0, len = data.length;
    while (i < len) {
        const num = data[i];
        // 判断前置位有几个1
        let end = 0
        let mask = 1 << 7;
        while ((num & mask) !== 0) {
            end++;
            mask >>= 1
        }
        // 前置位个数超过4个或者只有1个都是不满足utf-8要求的
        if (end === 1 || end > 4) {
            return false
        }
        if (end === 0) {
            end = 1
        }
        // console.log(end)
        // console.log(num.toString(2))
        for (let j = i + 1, len = i + end; j < len; j++) {
            // console.log(data[j].toString(2))
            if ((data[j] & two) !== one) {
                return false
            }
        }
        i = i + end
    }
    return true
};

// console.log(validUtf8([197,130,1]))
// console.log(validUtf8([248, 130, 130, 130]))

// @lc code=end

