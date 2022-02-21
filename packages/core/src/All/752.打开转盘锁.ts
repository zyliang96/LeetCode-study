/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

/**
 * 思路：
 * 可以看成是将一个四位的密码从0000转移到固定位置，中途不能够命中黑名单
 * @param deadends 
 * @param target 
 */
// @lc code=start
function openLock(deadends: string[], target: string): number {
    let map = new Map();
    // 处理0 - 9 的字符串编码
    let baseNumCode = '0'.charCodeAt(0)
    for (let i = 0; i < 10; i++) {
        map.set(String.fromCharCode(baseNumCode + i), i)
    }
    // 处理死亡数组，四个2进制位代表一个位置的字符描述
    for (let i = 0, len = deadends.length; i < len; i++) {
        let num = 0
        const data = deadends[i]
        for (let j = 0, jLen = data.length; j < jLen; j++) {
            num += map.get(data[j]) << (3 - j)
        }
        map.set(data, num)
    }
    // 找到最近的路径，同时避免在死亡数组中

};
// @lc code=end

