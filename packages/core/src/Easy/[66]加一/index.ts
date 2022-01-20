/**
 * 思路：
 * 从后往前找，大于10进位，否则退出循环
 * @param digits 
 */
// function plusOne(digits: number[]): number[] {
//     let len = digits.length - 1;
//     let next = 1;
//     // 加任意数的通用做法
//     while (len >= 0) {
//         const sum = digits[len] + next
//         next = Math.floor(sum / 10)
//         digits[len] = sum % 10
//         if (next > 0) {
//             len--
//         } else {
//             break;
//         }
//     }
//     if (next > 0) {
//         digits.unshift(next)
//     }
//     return digits
// };

function plusOne(digits: number[]): number[] {
    let len = digits.length - 1;
    let next = 1;
    // 只适用于+1
    while (len >= 0) {
        const sum = digits[len] + next;
        digits[len] = sum % 10;
        if (sum > 9) {
            len--
        } else {
            next = 0
            break
        }
    }
    if (next > 0) {
        digits.unshift(next)
    }
    return digits
};

// console.log(plusOne([1, 2, 3]))
console.log(plusOne([9, 9]))