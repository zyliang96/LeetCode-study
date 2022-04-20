/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start

/**
 * 回溯
 * @param n
 * @param k
 */
function combine(n: number, k: number): number[][] {
    let list = [];
    let temp = [];
    function dps(index, len, loop) {
        if (loop > k) {
            // 终止条件
            return;
        }
        for (let i = index; i < len; i++) {
            temp.push(i);
            dps();
        }

        temp.shift();
    }
}
// @lc code=end
