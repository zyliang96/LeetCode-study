/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * 自己实现对应的api方法实现去除字符串等
 * @param s
 * @returns
 */
// function reverseWords(s: string): string {
//   function reverse(list, i, j) {
//     while (i <= j) {
//       const temp = list[j]
//       list[j] = list[i];
//       list[i] = temp;
//       i++; j--
//     }
//   }

//   function reverseTrim(s) {
//     let list = [];
//     let i = 0, j = 0, len = s.length;
//     // 去除首空格
//     while (s[i] === ' ') {
//       i++;
//     }
//     for (; i < len; i++) {
//       if (i - 1 > 0 && s[i] === s[i - 1] && s[i] === ' ') {
//         continue;
//       } else {
//         list[j++] = s[i]
//       }
//     }
//     if (j - 1 > 0 && list[j - 1] === ' ') {
//       list.pop()
//     }
//     return list
//   }
//   let list = reverseTrim(s);
//   let len = list.length;
//   // 先翻转一遍
//   reverse(list, 0, len - 1);
//   // console.log(list)
//   let lastIndex = 0;
//   for (let i = 0; i < len; i++) {
//     if (list[i] === ' ') {
//       reverse(list, lastIndex, i - 1)
//       lastIndex = i + 1
//     }
//   }
//   reverse(list, lastIndex, len - 1)
//   return list.join('')
// };

function reverseWords(s: string): string {
    let list = [],
        len = s.length;
    let temp = [];
    let i = 0;

    // 去除首空格
    while (s[i] === " ") {
        i++;
    }
    for (; i < len; i++) {
        if (i - 1 > 0 && s[i] === s[i - 1] && s[i] === " ") {
            continue;
        } else if (s[i] === " ") {
            if (temp.length > 0) {
                list.unshift(temp.join(""));
                temp = [];
            }
        } else {
            temp.push(s[i]);
        }
    }
    if (temp.length > 0) {
        list.unshift(temp.join(""));
    }
    return list.join(" ");
}

console.log(reverseWords("the sky is blue"));
// @lc code=end
