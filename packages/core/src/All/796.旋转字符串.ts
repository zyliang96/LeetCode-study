/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * 用数组旋转的方法
 * @param s 
 * @param goal 
 * @returns 
 */
// function rotateString(s: string, goal: string): boolean {
//   let list = s.split('');
//   let result = false
//   for (let i = 0, len = list.length; i < len; i++) {
//     if (list.join('') === goal) {
//       result = true;
//       break
//     } else {
//       const data = list.splice(0, 1)
//       list.push(...data)
//     }
//   }
//   return result
// };

/**
 * 先遍历找到相等的，然后再遍历，如果s遍历结束了，则从头继续遍历，如果遇到不一样的，则遍历完成
 * @param s 
 * @param goal 
 * @returns 
 */
function rotateString(s: string, goal: string): boolean {
  let i = 0, j = 0;
  let sLen = s.length, gLen = goal.length;
  if (sLen !== gLen) {
    return false
  }
  while (i < sLen) {
    if()
    i++;
    if (i >= sLen) {
      break
    }
  }
  while (j < gLen) {
    if (i >= sLen) {
      i = 0
    }
    if (s[i] !== goal[j]) {
      console.log(s[i], goal[j], j)
      return false
    } else {
      i++;
      j++
    }
  }
  return true
};

console.log(rotateString("bbbacddceeb", "ceebbbbacdd"))
// @lc code=end

