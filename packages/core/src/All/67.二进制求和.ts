/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let aLen = a.length - 1;
    let bLen = b.length - 1;
    let next = 0;
    let result = []
    while (true) {
        const aNum = aLen >= 0 ? parseInt(a[aLen]) : 0;
        const bNum = bLen >= 0 ? parseInt(b[bLen]) : 0;
        const data = aNum ^ bNum ^ next;
        next = aNum & bNum || (aNum ^ bNum) & next
        result.unshift(data)
        if(aLen < 0 && bLen < 0 ){
            if(data === 0){
                result.shift()
            }
            break
        }
        if (aLen >= 0) {
            aLen--
        }
        if (bLen >= 0) {
            bLen--
        }
    }
    return result.join('')
};
// @lc code=end

