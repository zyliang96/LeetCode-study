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
    function dps(index, len, temp = []) {
        console.log(index, len, loop, temp);
        if (temp.length === k) {
            // 终止条件
            list.push(temp.slice());
            return;
        }
        for (let i = index + 1; i <= len; i++) {
            dps(index + 1, len, loop + 1, [].concat(temp, i));
        }
    }
    dps(1, n, 0, []);
    return list;
}

console.log(combine(4, 2));
// @lc code=end
