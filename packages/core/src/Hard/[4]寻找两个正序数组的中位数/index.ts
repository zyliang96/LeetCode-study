// 4. 寻找两个正序数组的中位数
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 示例 3：

// 输入：nums1 = [0,0], nums2 = [0,0]
// 输出：0.00000
// 示例 4：

// 输入：nums1 = [], nums2 = [1]
// 输出：1.00000
// 示例 5：

// 输入：nums1 = [2], nums2 = []
// 输出：2.00000

// 提示：

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    /**
     * 想法：
     * 通过截取两个数组的中位数，然后判断取值范围
     * 如果长度是奇数，说明一个数组的长度是奇数，一个数组的长度是偶函数，如果数组长度是偶数，则两个数组长度都是偶数或者两个数组都是奇数
     * 所以求中位数应该就是求的 （m + n）/ 2 或者 （m + n）/ 2 + 1
     */
    const n: number = nums1.length;
    const m: number = nums2.length;
    const sum: number = n + m;
    let result: number = 0;
    // 奇数的时候，找第(m+n)/2 + 1个元素(取整)，偶数的时候，取(m+n) / 2 和 (m + n)/ 2 + 1 的元素和除以2
    if (sum % 2) {
        result = getMidNum(nums1, nums2, Math.ceil(sum / 2));
    } else {
        result =
            (getMidNum(nums1, nums2, sum / 2) +
                getMidNum(nums1, nums2, sum / 2 + 1)) /
            2;
    }

    return result;
}

/**
 * 获取数值
 * 找第k个元素的值，比较两个数组前k / 2 个元素，然后判断是否符合的范围，然后移动对应的位置
 * @param num1
 * @param num2
 * @param k
 */
function getMidNum(num1: number[], num2: number[], k: number): number {
    const n: number = num1.length;
    const m: number = num2.length;
    let index1 = 0,
        index2 = 0;
        
}
