/**
 * 思路：
 * 贪心算法
 */
/**
 * 这个的想法是从目标点触发，找上一步的最优解，从而找到最终的最优解
 * @param nums 
 * @returns 
 */
// function jump(nums: number[]): number {
//     const len: number = nums.length;
//     // 要到达的位置
//     let min: number = len - 1;
//     let steps = 0;
//     while (min > 0) {
//         // 从左往右找，找到第一个可以到达终点的位置，就认为是倒数第二步的最优解
//         for (let i = 0; i < len; i++) {
//             if (i + nums[i] >= min) {
//                 min = i
//                 steps++;
//                 break
//             }
//         }
//     }
//     return steps
// };


/**
 * 找当前每一步的最优解
 * @param nums 
 * @returns 
 */
function jump(nums: number[]): number {
    const len: number = nums.length;
    let end = 0;
    let maxPosition = 0;;
    let steps = 0;
    for (let i = 0; i < len - 1; i++) {
        // TODO 没太理解，好像是找出到达当前可以达到的最远位置
        maxPosition = Math.max(maxPosition, i + nums[i])
        // 这一步很关键，i 和 end相等的时候，说明找到了下一步的最优解
        if (i === end) {
            end = maxPosition;
            steps++
        }
    }
    return steps
};