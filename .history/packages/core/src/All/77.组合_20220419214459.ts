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
    // 使用for循环的写法
    // function dfs(index, len, temp = []) {
    //     if (temp.length === k) {
    //         // 终止条件
    //         list.push(temp.slice());
    //         return;
    //     }
    //     for (let i = index; i <= len; i++) {
    //         temp.push(i);
    //         dfs(i + 1, len, temp);
    //         temp.pop();
    //     }
    // }
    function dfs(index, len, temp = []) {
        if (temp.length === k) {
            // 终止条件
            list.push(temp.slice());
            return;
        }
        temp.push(i);
        dfs(i + 1, len, temp);
        temp.pop();
    }
    dfs(1, n, []);
    return list;
}

// console.log(combine(4, 2));
// @lc code=end
