/**
 * 思路：
 * 也可以同一个表里位置替换
 * @param nums 
 */
function firstMissingPositive(nums: number[]): number {
    const len = nums.length
    let i = 0;
    // 将数组本身视为是一个hash表，即将值为i+1的数值放到第i个位置
    while (i < len) {
        if (nums[i] > 0) {
            if (nums[i] !== i + 1) {
                const temp = nums[nums[i] - 1]
                // 如果nums[num[i] - 1] === num[i],说明这俩位置上值一样，那就不用替换了
                if (temp === nums[i]) {
                    i++
                    continue
                }
                nums[nums[i] - 1] = nums[i]
                nums[i] = temp
            } else {
                i++
            }
        } else {
            i++
        }

    }
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return len + 1
};

console.log(firstMissingPositive([1, 1]))