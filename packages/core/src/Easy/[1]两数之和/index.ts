/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {//第一层循环
        const complement = target - nums[i];
        if (map.has(complement)) {//判断complement是否在map中
            return [map.get(complement), i]; //存在的话返回两个数的下标
        } else {
            map.set(nums[i], i);//不存在map中就将当前元素和下标存入map
        }
    }
    return [];
};