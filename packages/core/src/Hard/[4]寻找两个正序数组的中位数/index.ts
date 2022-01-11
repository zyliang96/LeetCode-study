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
    while (true) {
        // 第一个数组触发边界，所以这个时候的值请改是第二个数组的偏移量+
        if (index1 === n) {
            return num2[index2 + k - 1];
        }

        if (index2 === m) {
            return num1[index1 + k - 1];
        }

        if (k === 1) {
            return Math.min(num1[index1], num2[index2]);
        }
        // 第k个位置的一半
        let half = Math.floor(k / 2);
        // 第一个数组需要判断的位置，实际上是数组中的位置，无论是n、m,还是index1 、index2 ，都应该保持逻辑上的一致，即都应该是从0开始的位置，这样才能统一处理
        const newIndex1 = Math.min(index1 + half, n) - 1;
        // 第二个数组需要判断的位置
        const newIndex2 = Math.min(index2 + half, m) - 1;
        // 两个数组的点位
        const point1 = num1[newIndex1],
            point2 = num2[newIndex2];
        // 第一个点位 小于等于 第二个点位的时候，第一个点位需要右移，即排除掉第一个数组左侧的数据
        if (point1 <= point2) {
            // newIndex 是数组的位置，所以需要加 1 才能表示准确位置，newIndex + 1 - index1 实际上是偏移量，需要排除的数据个数，每次实际上都是在二分，因为newIndex是根据half计算的
            k -= newIndex1 - index1 + 1;
            index1 = newIndex1 + 1;
        } else {
            // 第一个点位 大于 第二个点位的时候，第二个点位需要右移，即排除掉了第二个数组左侧的数据
            k -= newIndex2 - index2 + 1;
            index2 = newIndex2 + 1;
        }
    }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
