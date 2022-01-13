/**
 * 思路：
 * 从尾开始找，找到第一个不满足升序的值（注意，这里是指从后往前为升序，如果从前往后看就是降序），
 * 如果存在则，则再从尾部遍历找到第一个大于该值的值，交换位置，然后将到改动位置后的所有数据翻转
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let len: number = nums.length,
        i = len - 2;
    // 找到最右侧那个不满足升序（从右往左数）的值
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    // 存在则找右侧第一个大于他的值
    if (i >= 0) {
        let j = len - 1
        while (j > i) {
            if (nums[j] > nums[i]) {
                swap(nums, i, j)
                break
            }
            j--
        }
    }
    // 翻转
    reverse(nums, i + 1)
};

/**
 * 置换
 * @param list 
 * @param i 
 * @param j 
 */
function swap(list: number[], i: number, j: number): void {
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
}

/**
 * 排序
 * @param list 
 * @param start 
 */
function reverse(list: number[], start: number): void {
    let left: number = start,
        right: number = list.length - 1;
    while (left < right) {
        swap(list, left, right)
        left++;
        right--
    }
}

nextPermutation([5,1,1])