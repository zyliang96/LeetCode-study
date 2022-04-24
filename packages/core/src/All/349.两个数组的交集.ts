/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let len1 = nums1.length, len2 = nums2.length, i = 0, j = 0;
  let list = []
  let result = new Set<number>()
  while (i < len1 || j < len2) {
    if (i < len1) {
      if (!list[nums1[i]] && list[nums1[i]] !== 0) {
        list[nums1[i]] = 1;
      } else if (list[nums1[i]] < 0) {
        list[nums1[i]] += 1;
      }
    }

    if (j < len2) {
      if (list[nums2[j]] && list[nums2[j]] > 0) {
        list[nums2[j]] -= 1;
      } else if (!list[nums2[j]] && list[nums2[j]] !== 0) {
        list[nums2[j]] = -1;
      }

    }

    if (list[nums1[i]] === 0) {
      result.add(nums1[i])
    }

    if (list[nums2[j]] === 0) {
      result.add(nums2[j])
    }

    i++;
    j++;
  }
  return [...result]

};
// console.log(intersection([1, 2, 2, 1], [2, 2]))
// @lc code=end

