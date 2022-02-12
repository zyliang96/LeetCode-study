/*
 * @lc app=leetcode.cn id=187 lang=typescript
 *
 * [187] 重复的DNA序列
 */

/**
 * 思路：感觉只要使用滑动窗口+哈希表即可实现，用不用二进制没什么大的改变
 * @param s 
 */
// @lc code=start
// function findRepeatedDnaSequences(s: string): string[] {
//     const L = 10;
//     const len = s.length;
//     const map = new Map();
//     let queue = []
//     let result = []
//     for (let i = 0; i < len; i++) {
//         if (i < L - 1) {
//             queue.push(s[i])
//         } else {
//             queue.push(s[i])
//             const sub = queue.join('')
//             map.set(sub, (map.get(sub) || 0) + 1)
//             if (map.get(sub) === 2) {
//                 result.push(sub)
//             }
//             queue.shift()
//         }
//     }
//     return result
// };

/**
 * 官网：哈希表+滑动窗口+位运算代码
 * 位运算快在了不需要对数组进行操作，空间节省
 * @param s 
 * @returns 
 */
function findRepeatedDnaSequences(s: string): string[] {
    const L = 10;
    const bin = new Map();
    bin.set('A', 0);
    bin.set('C', 1);
    bin.set('G', 2);
    bin.set('T', 3);
    
    const ans = [];
    const n = s.length;
    if (n <= L) {
        return ans;
    }
    let x = 0;
    // 这里是在拼接2进制
    for (let i = 0; i < L - 1; ++i) {
        x = (x << 2) | bin.get(s[i]);
    }
    const cnt = new Map();
    for (let i = 0; i <= n - L; ++i) {
        // 这里是是在计算滑动后的值，先将数向左移动2位，然后和第i+L-1个数做或运算，即 0| X = X
        // 然后再和20位全1的数据做&运算 ， 得到20位的值
        x = ((x << 2) | bin.get(s[i + L - 1])) & ((1 << (L * 2)) - 1);
        cnt.set(x, (cnt.get(x) || 0) + 1);
        if (cnt.get(x) === 2) {
            ans.push(s.slice(i, i + L));
        }
    }
    return ans;
};



// @lc code=end