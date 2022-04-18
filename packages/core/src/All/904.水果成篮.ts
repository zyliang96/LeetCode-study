/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * 通过题目可以看到，这个题实际上想问的是，在数组中连续最长的两个数的长度
 * @param fruits 
 */
function totalFruit(fruits: number[]): number {
  // 这个是根据 map 来判断是否符合
  const len = fruits.length;
  let map = new Map();
  let j = 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    const num = map.get(fruits[i]) || 0
    if (num) {
      map.set(fruits[i], num + 1)
    } else {
      map.set(fruits[i], 1)
    }
    while (map.size > 2) {
      const count = map.get(fruits[j])
      if (count === 1) {
        map.delete(fruits[j])
      } else {
        map.set(fruits[j], count - 1)
      }
      j++
    }
    max = Math.max(max, i - j + 1)
  }
  return max
};

// function totalFruit(fruits: number[]): number {
//   // 这个是根据 map 来判断是否符合
//   const len = fruits.length;
//   let list = [];
//   let numMap = {};
//   let max = 0, j = 0;
//   for (let i = 0; i < len; i++) {
//     const current = fruits[i]
//     const num = numMap[current] || 0;
//     if (num) {
//       numMap[current] += 1;
//     } else {
//       list.push(current)
//       numMap[current] = 1
//     }
//     while (list.length > 2) {
//       const data = fruits[j];
//       numMap[data] -= 1;
//       if (numMap[data] === 0) {
//         list = list.filter((item) => {
//           return item !== data
//         })
//       }
//       j++
//     }
//     max = Math.max(max, i - j + 1)
//   }

//   return max
// };

// console.log(totalFruit([1,0,1,4,1,4,1,2,3]))
// @lc code=end

