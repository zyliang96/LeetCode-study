/**
 * 思路：
 * 删除重复元素实际上只要设置两个头结点，然后向后移动，一个用来标注位置，一个用来遍历数组
 * 双指针
 * @param nums
 */
function removeDuplicates(nums: number[]): number {
    const len: number = nums.length;
    let i: number = 0,
        j: number = 1;
    while (j < len) {
        if (nums[i] !== nums[j]) {
            if(j - i > 1){
                nums[++i] = nums[j];
            }else{
                i++
            }
        }
        j++;
    }
    return i + 1;
}
