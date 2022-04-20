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
    function dps(index, len, loop, temp = []) {
        console.log(index, len, loop, temp);
        if (loop >= k) {
            // 终止条件
            list.push(temp);
            return;
        }
        for (let i = index; i <= len; i++) {
            temp.push(i);
            dps(index + 1, len, loop + 1, temp);
            temp.shift();
        }
    }
    dps(1, n, 1, []);
    return list;
}

console.log(combine(4, 2));
// @lc code=end
