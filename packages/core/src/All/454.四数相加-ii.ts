/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start

/**
 * 利用回溯法会超出堆栈限制，但是这个属于通用解法
 * @param nums1 
 * @param nums2 
 * @param nums3 
 * @param nums4 
 * @returns 
 */
// function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
//   let list = [];
//   let targetList = [nums1, nums2, nums3, nums4]
//   function dfs(loop, sum = 0, index, temp = []) {
//     // console.log(loop, sum, index, temp)
//     if (sum === 0 && temp.length === 4) {
//       list.push(temp.slice());
//       return
//     }

//     if (loop >= 4) {
//       return
//     }

//     const target = targetList[loop]
//     if (index >= target.length) {
//       return
//     }
//     temp.push(target[index])
//     dfs(loop + 1, sum + target[index], 0, temp)
//     temp.pop()
//     dfs(loop, sum, index + 1, temp)
//   }

//   dfs(0, 0, 0, [])
//   // console.log(list)
//   return list.length
// };

/**
 * 把四数之和拆分为，两数之和
 * @param nums1 
 * @param nums2 
 * @param nums3 
 * @param nums4 
 */
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let result = 0;
  let map = {};
  const lne = nums1.length
  for (let i = 0; i < lne; i++) {
    for (let j = 0; j < lne; j++) {
      const sum = 0 - (nums1[i] + nums2[j]);
      if (map[sum]) {
        map[sum] += 1
      } else {
        map[sum] = 1
      }
    }
  }

  for (let i = 0; i < lne; i++) {
    for (let j = 0; j < lne; j++) {
      const sum = nums3[i] + nums4[j];
      if (map[sum]) {
        result += map[sum]
      }
    }
  }

  return result


};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
// @lc code=end

