/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * 利用map，判断差值是否存在，从而判断了目标值
 * @param nums 
 * @param target 
 * @returns 
 */
function twoSum(nums: number[], target: number): number[] {
  let map = {};
  let list = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map[nums[i]] || map[nums[i]] === 0) {
      list.push(map[nums[i]], i)
    }
    let num = target - nums[i]
    if (!map[num]) {
      map[num] = i
    }
  }
  return list
};

// function twoSum(nums: number[], target: number): number[] {
//   let list = nums.sort((a, b) => a - b)
//   let i = 0, j = list.length - 1;
//   while (i <= j) {
//     const data = list[i] + list[j]
//     if (data < target) {
//       i++
//     } else if (data > target) {
//       j--
//     } else {
//       return [i, j]
//     }
//   }
//   return []
// };

console.log(twoSum([3,2,4], 6))
// @lc code=end

