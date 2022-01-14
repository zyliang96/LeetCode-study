/**
 * 思路：
 * 回溯法求解，树的形式，找最后结果为0的数据
 * @param candidates 
 * @param target 
 */
function combinationSum(candidates: number[], target: number): number[][] {
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
        const currentTarget = target - list[i]
        // 第i个值小于0后续的就不需要遍历了
        if (currentTarget < 0) {
            break
        }
        getSumZero(list, i, currentTarget, result, [].concat(path, list[i]))
    }
}


console.log(combinationSum([2, 3, 5], 7))