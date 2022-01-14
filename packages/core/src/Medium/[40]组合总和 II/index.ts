/**
 * 思路：
 * 还是回溯，先排序，然后每次回溯的时候，不能再次回溯本身
 * @param candidates 
 * @param target 
 * @returns 
 */
function combinationSum2(candidates: number[], target: number): number[][] {
    let result = []
    candidates.sort((a, b) => a - b)
    getSumZero(candidates, 0, target, result, [])
    return result

};


/**
 * 获取和为0的数据
 * @param list 
 * @param start 
 * @param target 
 * @param result 
 * @param path 
 */
function getSumZero(list: number[], start: number, target: number, result: number[][], path: number[]) {
    // 小于 0 说明不符合，直接退出
    if (target < 0) {
        return
    }
    // 等于0 说明符合，则入队
    if (target === 0) {
        result.push(path);
        return
    }
    const len: number = list.length;
    // 循环遍历每一个
    for (let i = start; i < len; i++) {
        const item = list[i]
        const currentTarget = target - item
        // 第i个值小于0后续的就不需要遍历了
        if (currentTarget < 0) {
            break
        }
        // 从第二个相等的数开始，后续相等的值都不做处理
        if (i > start && list[i] === list[i - 1]) {
            continue
        }
        getSumZero(list, i + 1, currentTarget, result, [].concat(path, list[i]))
    }
}


console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))