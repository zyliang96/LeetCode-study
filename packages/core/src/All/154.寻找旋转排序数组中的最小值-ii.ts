/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {
  // 思路：二分查找，判断是否中间值和左右的大小，
  let len = nums.length;
  let left = 0, right = len - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    let leftVal = nums[left], rightVal = nums[right], midVal = nums[mid];
    console.log(leftVal, midVal, rightVal)
    // 这里需要注意，一定要和右侧比较，因为最小值右侧的值一定是大于等于最小值的，所以根据右侧计算才有意义
    if (midVal > rightVal) {
      left = mid + 1
    } else if (midVal < rightVal) {
      right = mid
    } else {
      right -= 1
    }
  }
  return nums[left]

};

// console.log(findMin([4, 5, 6, 7, 0, 1, 4]))
// console.log(findMin([0, 1, 4, 4, 5, 6, 7]))
// console.log(findMin([1, 3, 5]))
// console.log(findMin([2, 2, 2, 0, 1]))
// console.log(findMin([2, 2, 2, 0, 1]))
// console.log(findMin([1]))
// console.log(findMin([1, 1]))
// console.log(findMin([3, 1, 1]))
// @lc code=end

