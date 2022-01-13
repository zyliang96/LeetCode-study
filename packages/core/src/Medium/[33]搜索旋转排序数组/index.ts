/**
 * 思路：
 * 首尾指针，然后找中间数，然后首尾指针和中间数以及目标值比较，从而判断左右位置 
 */

/**
 * 二分查找逻辑
 * @param nums 
 * @param target 
 */
// function search(nums: number[], target: number): number {
//     let len: number = nums.length,
//         left: number = 0,
//         right: number = len - 1;
//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2)
//         if (nums[mid] === target) {
//             return mid
//         }
//         const lNum = nums[left],
//             rNum = nums[right],
//             mNum = nums[mid];

//         // mid 在左侧
//         if (lNum <= mNum) {
//             if (mNum > target && lNum <= target) {
//                 right = mid - 1
//             } else {
//                 left = mid + 1
//             }
//         } else {
//             if (mNum < target && rNum >= target) {
//                 left = mid + 1
//             } else {
//                 right = mid - 1
//             }
//         }
//     }
//     return -1
// };

/**
 * 如果左侧的数值小于右侧的数值，则说明发生了旋转，这个时候从两头趋近旋转点，然后再判断取哪一段作为二分查找的区间
 * @param nums 
 * @param target 
 */
function search(nums: number[], target: number): number {
    const len = nums.length
    let left: number = 0, right: number = len - 1;
    // 这个时候说明发生了翻转，这个时候需要判断目标值在哪一段
    const lNum = nums[left]
    const rNum = nums[right]
    // lNum > rNum 说明发生了翻转
    if (lNum > rNum) {
        // 说明在翻转左侧
        const isLeft = lNum <= target
        // 循环翻转两个数组最小堆数组长度次
        while (left <= right) {
                // 找到左侧大于右侧数据的值，说明找到翻转点，如果在翻转左侧，从0开始，右侧是当前的值
            if (nums[left] > nums[left + 1]) {
                if (isLeft) {
                    right = left
                    left = 0
                } else {
                    left = left + 1
                    right = len - 1
                }
                break
            }
            // 找到右侧小于左侧的值，说明找到翻转点，如果在翻转左侧，错侧为0，右侧为当前right-1,否则left是当前值，右侧为原始长度
            if (nums[right] < nums[right - 1]) {
                if (isLeft) {
                    left = 0
                    right = right - 1
                } else {
                    left = right
                    right = len - 1
                }
                break
            }
            left++
            right--
        }
        console.log(left, right)
    }
    // 二分法处理
    while (left <= right) {
        // 中间数取值逻辑为在左指数的基础上加上差值的二分之一
        let mid = left + Math.floor((right - left) / 2);
        /**
         * 小于的时候，右指数等于中位数减一
         * 大于的时候，左指数等于中位数加一
         * 等于的时候，返回中位数
         */
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}


console.log(search([3, 1], 1))