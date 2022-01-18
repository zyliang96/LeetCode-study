/**
 * 思路：
 * 动态规划，实际上就是比较当前值和之前值的累加比较，是当前值的累加大还是当前值大，如果当前值大，则直接放弃之前的累加
 * @param nums 
 */
// function maxSubArray(nums: number[]): number {
//     let pre = 0, maxAns = nums[0];
//     nums.forEach((x) => {
//         // 累加值和当前值比较，取较大的
//         pre = Math.max(pre + x, x);
//         // 历史最大值和当前累加值比较，取最大的
//         maxAns = Math.max(maxAns, pre);
//     });
//     return maxAns;
// };



/**
 * 分治法
 * TODO 需要理解一下
 */
function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
}

// 找最大子序列和
/**
 * 
 * lSum 表示 [l,r][l,r] 内以 ll 为左端点的最大子段和
 * rSum 表示 [l,r][l,r] 内以 rr 为右端点的最大子段和
 * mSum 表示 [l,r][l,r] 内的最大子段和
 * iSum 表示 [l,r][l,r] 的区间和
 * @param l 
 * @param r 
 * @returns 
 */
const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
}

/**
 * 二分查找
 * @param a 目标数组
 * @param l 左指针位置
 * @param r 有指针位置
 * @returns 
 */
const getInfo = (a, l, r) => {
    if (l === r) {
        return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    console.log(l, r, lSub, rSub)
    return pushUp(lSub, rSub);
}

function maxSubArray(nums: number[]): number {
    return getInfo(nums, 0, nums.length - 1).mSum;
}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))