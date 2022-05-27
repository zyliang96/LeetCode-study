/**
 * 使用反转的思想实现
 * @param s 
 * @param n 
 * @returns 
 */

//  剑指 Offer 58 - II. 左旋转字符串
//  字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

//  示例 1：
 
//  输入: s = "abcdefg", k = 2
//  输出: "cdefgab"
//  示例 2：
 
//  输入: s = "lrloseumgh", k = 6
//  输出: "umghlrlose"
 
//  限制：
 
//  1 <= k < s.length <= 10000
// function reverseLeftWords(s: string, n: number): string {
//   let list = s.split('')
//   let len = list.length;
//   function reverse(list, i, j) {
//     while (i <= j) {
//       const temp = list[j]
//       list[j] = list[i];
//       list[i] = temp;
//       i++; j--
//     }
//   }

//   reverse(list, 0, n - 1);
//   reverse(list, n, len - 1);
//   reverse(list, 0, len - 1);
//   return list.join('')

// };


/**
 * 截取字符串
 * @param s 
 * @param n 
 * @returns 
 */
function reverseLeftWords(s: string, n: number): string {
  let str1 = s.slice(0, n)
  let str2 = s.slice(n)
  return str2 + str1

};



console.log(reverseLeftWords("abcdefg", 2))