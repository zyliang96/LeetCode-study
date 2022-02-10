/*
 * @lc app=leetcode.cn id=89 lang=typescript
 *
 * [89] 格雷编码
 */

// @lc code=start
function grayCode(n: number): number[] {
    let result: number[] = [];
    for (let i = 0, len = 1 << n; i < len; i++) {
        result.push((i >> 1) ^ i)
    }
    return result
};
// @lc code=end

