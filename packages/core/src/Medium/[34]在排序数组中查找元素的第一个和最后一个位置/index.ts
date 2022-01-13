/**
 * 思路：
 * 排序数组中的查找元素的第一个和最后一个位置，由于要求O(logN)，所以应该要用到，二分法
 * 优先判断目标值是否在数组范围内，然后再判断中间值的位置，如果找到了和目标元素相同的节点位置，再找
 */
function searchRange(nums: number[], target: number): number[] {
    let ans = [-1, -1];
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false);
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    }

    return ans

};
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