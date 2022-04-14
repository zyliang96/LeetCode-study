/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  /**
   * 二分查找
   * lower 为 true的时候，往左找，为false的时候，往右找
   * @param list 
   * @param start 
   * @param end 
   */
  function binarySearch(list: number[], target: number, lower: boolean) {
    let ans = -1;
    let start: number = 0,
      end: number = list.length - 1
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      const mNum = list[mid]
      if (mNum > target) {
        end = mid - 1
      } else if (mNum < target) {
        start = mid + 1
      } else {
        ans = mid
        if (lower) {
          end = mid - 1
        } else {
          start = mid + 1
        }
      }
    }
    return ans
  }
  const len = nums.length;
  const start = binarySearch(nums, target, true)
  const end = binarySearch(nums, target, false);
  let result = [-1, -1]
  if (start <= end && end < len && nums[start] === target && nums[end] === target) {
    result = [start, end]
  }
  return result
};
// @lc code=end

