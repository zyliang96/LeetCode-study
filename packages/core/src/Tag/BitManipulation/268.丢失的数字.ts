/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */
/**
 * 思路：
 * 1、排序后判断位置和对应值不一样的数 O(nlogn)
 * 2、哈希集合 O(n)
 * 3、位运算 这个实际上和之前的136很像，就是利用异或自身为0的性质
 * 4、数学计算，数组长度的连续累加 和 数组数据的累加和的差值就是缺少的值O(n)
 * @param nums 
 */
// @lc code=start
/**
 * 数组判断
 * 根据长度，可以移动数组位置，通过数组位置来记录具体的值，最后值和位置不等的就是缺的数据
 * @param nums 
 */
// function missingNumber(nums: number[]): number {
//     let i = 0;
//     const len = nums.length;
//     while (i < len) {
//         const index = nums[i];
//         // 判断当前值是否和对应位置一致，不一致的时候判断，一致的时候，直接i++
//         if (nums[index] != index) {
//             // index 值和数组长度相等时，直接赋值，然后i++
//             if (index === len) {
//                 nums[index] = index;
//                 i++;
//             } else {
//                 // 交换两个数
//                 nums[index] ^= nums[i];
//                 nums[i] ^= nums[index];
//                 nums[index] ^= nums[i]
//             }

//         } else {
//             i++
//         }
//     }
//     // 找到第一个和位置不符的值
//     for (let j = 0; j < len; j++) {
//         if (nums[j] !== j) {
//             return j
//         }
//     }
//     return len
// };

/**
 * 位运算,利用了136题中提到的异或的结合律和交换律
 * @param nums 
 */
function missingNumber(nums: number[]): number {
    const len = nums.length;
    let result = 0
    for(let i =0;i<len;i++){
        result ^= nums[i] ^ (i+1)
    }
    return result
};
// @lc code=end

