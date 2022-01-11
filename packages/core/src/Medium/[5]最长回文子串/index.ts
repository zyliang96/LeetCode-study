/**
 * 这是一个O(n)的想法，还在酝酿
 * TODO 待写完
 * @param s
 * @returns
 */
function longestPalindrome(s: string): string {
    let targetList: string[] = [];
    let queueList: string[] = [];
    let maxList: string[] = [];
    let max: number = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        const item = s[i];
        if (!queueList.length) {
            queueList.push(item);
        } else {
            const currentItem = queueList.pop();
            if (currentItem === item) {
                targetList.push(item, currentItem);
            } else {
                const lastItem = queueList.pop();
                if (lastItem) {
                    if (lastItem === item) {
                        targetList.push(item, currentItem, lastItem);
                    } else {
                    }
                } else {
                    queueList.push(currentItem);
                }
            }
        }
    }
    return targetList.join("");
}

/**
 * 这个还是类似于从回文中间查询的逻辑，这个的时间复杂度还是O(n^2),最优的场景是都是一样的，这个时候是O(n)
 * @param s
 * @returns
 */
// function longestPalindrome(s: string): string {
//     // 处理边界情况
//     if (!s || s.length < 1) {
//         return "";
//     }
//     // 字符串长度
//     let len: number = s.length;
//     // 最大长度和开始位置
//     let maxLen: number = 0;
//     let start: number = 0;
//     // 从头开始遍历循环
//     for (let i = 0; i < len; i++) {
//         // console.log(i)
//         // 一开始的时候，先将左右节点都设置为i
//         let left = i,
//             right = i;
//         // 去除相同元素的影响，遇到相同元素，直接将i++,即right右移，因为不管是奇数个还是偶数个，相同元素都是回文
//         while (s[i + 1] === s[i]) {
//             i++;
//         }
//         right = i;
//         // 然后如果左右节点还在边界范围内，比较左右是否一致，一致则左右都发生偏移，否则跳出循环，这里至少会执行一次偏移，所以跳出循环后需要进行修正
//         while (left >= 0 && right < len) {
//             if (s[left] === s[right]) {
//                 left--;
//                 right++;
//             } else {
//                 break;
//             }
//         }
//         left++;
//         right--;
//         // 如果最大长度大于现有的最大长度，则记录下开始位置和长度
//         if (maxLen < right - left + 1) {
//             start = left;
//             maxLen = right - left + 1;
//         }
//     }
//     return s.substr(start, maxLen);
// }

const targetString = "aacabdkacaa";
console.log(targetString.length);
console.log(longestPalindrome(targetString));
