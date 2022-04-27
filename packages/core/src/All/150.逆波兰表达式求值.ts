/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
// function evalRPN(tokens: string[]): number {
//   let list = []
//   let index = 0
//   for (let i = 0, len = tokens.length; i < len; i++) {
//     console.log(list)
//     if (tokens[i] === "+") {
//       const first = list.pop()
//       const second = list.pop()
//       list.push(second + first)
//     } else if (tokens[i] === "-") {
//       const first = list.pop()
//       const second = list.pop()
//       list.push(second - first)
//     } else if (tokens[i] === "*") {
//       const first = list.pop()
//       const second = list.pop()
//       list.push(second * first)
//     } else if (tokens[i] === "/") {
//       const first = list.pop()
//       const second = list.pop()
//       list.push((second / first) | 0)
//     } else {
//       list.push(parseInt(tokens[i]))
//     }
//   }
//   console.log(list)
//   return list.pop()
// };


function evalRPN(tokens: string[]): number {
  const stack = [];
  const n = tokens.length;
  const isNumber = (token) => {
    return !('+' === token || '-' === token || '*' === token || '/' === token);
  }
  for (let i = 0; i < n; i++) {
    const token = tokens[i];
    if (isNumber(token)) {
      stack.push(parseInt(token));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (token === '+') {
        stack.push(num1 + num2);
      } else if (token === '-') {
        stack.push(num1 - num2);
      } else if (token === '*') {
        stack.push(num1 * num2);
      } else if (token === '/') {
        stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
      }
    }
  }
  return stack.pop();

}



// console.log(evalRPN(["2", "1", "+", "3", "*"]))
// console.log(evalRPN(["2", "1", "+", "3", "*"]))
// console.log(evalRPN(["4", "13", "5", "/", "+"]))
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
// @lc code=end

