/**
 * 这道题实际上求解是算对于一个 i、j，满足(j-i) * Min(Ai,Aj) 最大
 */
/**
 * 暴力求解,时间复杂度O(n^2)
 * @param height
 */
// function maxArea(height: number[]): number {
//     const len: number = height.length;
//     let max: number = 0;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             const data = (j - i) * Math.min(height[i], height[j]);
//             if (max < data) {
//                 max = data;
//             }
//         }
//     }
//     return max;
// }

/**
 * 双指针，双指针的想法是在左右两个边界的时候，j-i是最大的，这个时候判断Min(Ai,Aj),当j和i趋近的时候，只有当Ai,Aj的距离缩小才有可能让整体变大，所以这个时候需要移动较小的那个值
 * @param height
 */
function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length;
    let max: number = 0;
    while (left !== right) {
        const newMax = (right - left) * Math.min(height[left], height[right]);
        if (newMax > max) {
            max = newMax;
        } else {
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
    }
    return max;
}
