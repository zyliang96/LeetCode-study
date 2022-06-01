// 剑指 Offer 53 - II. 0～n-1中缺失的数字
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。



// 示例 1:

// 输入: [0,1,3]
// 输出: 2
// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8


// 限制：

// 1 <= 数组长度 <= 10000

function missingNumber(nums: number[]): number {
  let len = nums.length;
  // 提前剪枝
  if (nums[len - 1] < len) {
    return len
  }
  let left = 0, right = len - 1;
  while (left <= right) {
    // 这里求中间值，如果nums[mid] > mid 说明，左侧中有缺少值，那么总会遇到一个nums[mid] <= mid，这个时候left = mid + 1 就是缺少的目标值
    let mid = left + ((right - left) >> 1);
    if (nums[mid] > mid) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
};

// console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]))
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(missingNumber([0, 1, 3]))