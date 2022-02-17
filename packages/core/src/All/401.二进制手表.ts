/*
 * @lc app=leetcode.cn id=401 lang=typescript
 *
 * [401] 二进制手表
 */

/**
 * 思路：
 * 小时有4个位置，最大值是11 二进制表示为 1011 最小值为 0 二进制为(0000)
 * 分钟有6个位置，最大值是59 二进制表示为 111011 最小值为 0 二进制为 0000
 * 所以对于给定的二进制为1的数量，最极限的情况下应该也只有8个位可以为1，其中小时最多3位为1，分钟最多5位为1
 * 小时存在的可能是1011，0111,0011,0001,0010,0100,0101,1000,1001,1010
 * 分钟同样的道理，所以需要列出所有的可能性
 * 那么实际上的运算应该是求各个位置为1的可能性的排列组合
 * @param turnedOn 
 */

// @lc code=start
function readBinaryWatch(turnedOn: number): string[] {
    let result = []
    if (turnedOn < 9) {
        // 小时的基础数据
        let hourBaseNum = countNum(12, 3);
        // 分钟的基础数据
        let minuteBaseNum = countNum(60, 6);
        for (let i = 0; i <= turnedOn && i <= 6; i++) {
            const count = turnedOn - i;
            if (count >= 0 && count <= 3) {
                const hourList = hourBaseNum[count];
                const minuteList = minuteBaseNum[i];
                hourList.forEach((hour) => {
                    minuteList.forEach((min) => {
                        result.push(`${hour}:${min < 10 ? '0' + min : min}`)
                    })
                })
            }
        }
    }
    return result
};

/**
 * 这个是要计算出所有的可能性
 * @param max 
 * @param oneNum 
 * @param baseNum 
 * @returns 
 */
function countNum(max, oneNum) {
    let result = []
    for (let i = 0; i <= oneNum; i++) {
        result[i] = []
    }
    for (let i = 0; i < max; i++) {
        let ret = 0;
        let n = i
        while (n) {
            n &= n - 1;
            ret++;
        }
        result[ret].push(i)
    }
    return result
}
// @lc code=end

