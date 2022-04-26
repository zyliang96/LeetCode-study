/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * 循环加双指针写法
 * @param nums 
 * @param target 
 * @returns 
 */
// function fourSum(nums: number[], target: number): number[][] {
//   nums.sort((a, b) => a - b);
//   const len = nums.length;
//   let list = []
//   for (let i = 0; i < len - 3; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue
//     }
//     for (let j = i + 1; j < len - 2; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) {
//         continue
//       }
//       let left = j + 1, right = len - 1;
//       while (left < right) {
//         const sum = nums[i] + nums[j] + nums[left] + nums[right]
//         if (sum < target) {
//           left++;
//         } else if (sum > target) {
//           right--
//         } else {
//           list.push([nums[i], nums[j], nums[left], nums[right]]);
//           while (left < right && nums[left] === nums[left + 1]) {
//             left++
//           }
//           while (left < right && nums[right] === nums[right - 1]) {
//             right--
//           }
//           left++;
//           right--
//         }
//       }
//     }
//   }
//   return list
// };


/**
 * 回溯法
 * @param nums 
 * @param target 
 * @returns 
 */
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let list = [];
  let temp = [];
  function dfs(index, count, target) {
    if (target === 0 && count === 0) {
      list.push(temp.slice())
      return
    }

    // 数据不够
    if (len - index < count) {
      return
    }
    // 剪枝 如果目标值比最小值的n倍都小，
    if (target < count * nums[index]) {
      return
    }
    // 剪枝，如果目标值比最大的n被都大
    if (target > count * nums[len - 1]) {
      return
    }

    for (let i = index; i < len; i++) {
      // 去除重复的内容
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      temp.push(nums[i])
      dfs(i + 1, count - 1, target - nums[i]);
      temp.pop()
    }
  }

  dfs(0, 4, target)
  return list
};

// console.log(fourSum([2, 2, 2, 2, 2], 8))
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
// console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11))
// console.log(fourSum([-493, -482, -482, -456, -427, -405, -392, -385, -351, -269, -259, -251, -235, -235, -202, -201, -194, -189, -187, -186, -180, -177, -175, -156, -150, -147, -140, -122, -112, -112, -105, -98, -49, -38, -35, -34, -18, 20, 52, 53, 57, 76, 124, 126, 128, 132, 142, 147, 157, 180, 207, 227, 274, 296, 311, 334, 336, 337, 339, 349, 354, 363, 372, 378, 383, 413, 431, 471, 474, 481, 492], 6189))
// @lc code=end

