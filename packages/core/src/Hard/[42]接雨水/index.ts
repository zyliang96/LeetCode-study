/**
 * 思路：
 * 利用栈存储具体的height值的位置，然后匹配到大于其值的就进行计算，然后出栈，出栈后计算栈中的下一个数据是否还满足其大于的情况，然后再计算
 */


/**
 * 
 * @param height 
 */
function trap(height: number[]): number {
    // 计算栈
    let stack: any[] = [];
    // 高度
    const len: number = height.length;
    let sum: number = 0
    // 边界情况处理
    if (!len || len === 1) {
        return sum
    }
    // 循环遍历
    for (let i = 0; i < len; i++) {
        // 只有当前值比栈中值大的时候，才会能够储水
        // TODO 注意：这里一定要有偏差的时候再进行出栈操作
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            // 栈为空，说明没有节点了，直接退出循环
            if (!stack.length) {
                break
            }
            const left = stack[stack.length - 1];
            const width = i - left - 1;
            const currentHeight = Math.min(height[left], height[i]) - height[top];
            sum += width * currentHeight
        }
        stack.push(i)

    }
    return sum
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))