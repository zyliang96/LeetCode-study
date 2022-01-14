/**
 * 二分查找，需要考虑首尾
 * @param nums 
 * @param target 
 */
function searchInsert(nums: number[], target: number): number {
    const len = nums.length;
    let left: number = 0,
        right: number = len - 1;

    while (left <= right) {
        // 判断边界情况，错边界大于等于目标值，则说明在左侧位置插入
        if (nums[left] >= target) {
            return left
        }
        // 右边界小于目标值，要在右侧边界+1处插入，这个是和左侧不一样的点，因为左侧位置固定
        if (nums[right] < target) {
            return right + 1
        }
        // 右边界相等，则返回右边界
        if (nums[right] === target) {
            return right
        }
        // 取中间值计算
        const mid = left + ((right - left) >> 1);
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    if (left > right) {
        return left
    } else {
        return left
    }
};

// function searchInsert(nums: number[], target: number): number {
//     const n = nums.length;
//     let left = 0, right = n - 1, ans = n;
//     while (left <= right) {
//         let mid = ((right - left) >> 1) + left;
//         if (target <= nums[mid]) {
//             ans = mid;
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return ans;
// }
