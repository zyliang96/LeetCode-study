/**
 * 使用反转的思想实现
 * @param s 
 * @param n 
 * @returns 
 */
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