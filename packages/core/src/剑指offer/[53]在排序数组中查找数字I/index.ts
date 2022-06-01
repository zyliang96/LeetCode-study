// 剑指 Offer 53 - I. 在排序数组中查找数字 I
// 统计一个数字在排序数组中出现的次数。



// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0


// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109

function search(nums: number[], target: number): number {
  // 二分查找，然后在左右查找
  function binarySearch(list, target, lower) {
    let len = list.length;
    let ans = len - 1, left = 0, right = len - 1
    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      if (list[mid] === target) {
        // 为true的时候往右找，为false往左找
        ans = mid
        if (lower) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      } else if (list[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return ans
  }
  // 这个考虑的复杂点在于如何确定一个目标结果，来计算差值
  const leftIndex = binarySearch(nums, target, false);
  const rightIndex = binarySearch(nums, target, true);
  // nums[leftIndex] 和 nums[rightIndex] 一定要等于目标值
  if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
    return rightIndex - leftIndex + 1
  }
  return 0
};