/**
 * 移除元素实际上可以用双指针进行，同时一个额外的指针用于固定指定位置
 */
/**
 * 双指针
 * @param nums 
 * @param val 
 * @returns 
 */
function removeElement(nums: number[], val: number): number {
    let left: number = 0,
        right: number = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1]
            right--
        } else {
            left++
        }
    }
    return left
}

/**
 * 通用解法
 * @param nums
 * @param val
 * @returns
 */
// function removeElement(nums: number[], val: number): number {
//     const len:number = nums.length;
//     let idx:number = 0;
//     for(let i = 0;i<len;i++){
//         if(nums[i] !== val){
//             nums[idx++] = nums[i]
//         }
//     }
//     return idx;
// }

