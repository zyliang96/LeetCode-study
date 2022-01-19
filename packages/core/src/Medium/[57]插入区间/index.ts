/**
 * 思路：
 * 答案中的这个思路很棒，实际上就是将整个数组分成了三个部分，左侧不重合的部分，重合的部分 或 目标本身， 右侧不重合的
 * 现在是一个变形，实际上只要在原数组上做操作即可，这样可以减少右侧的遍历，不需要占用额外的空间，但是剪裁数组本身需要消耗一定的时间
 * @param intervals 
 * @param newInterval 
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let i: number = 0;
    let start: number = -1;
    const len = intervals.length;
    // 当前遍历的是蓝左边的，不重叠的区间
    while (i < len && intervals[i][1] < newInterval[0]) {
        i++;
    }
    // 当前遍历是有重叠的区间
    while (i < len && intervals[i][0] <= newInterval[1]) {
        if (start < 0) {
            start = i
        }
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
        i++;
    }
    if (start < 0) {
        intervals.splice(i, 0, newInterval)
    } else {
        intervals.splice(start, i - start, newInterval)
    }
    return intervals;
};


// function insert(intervals: number[][], newInterval: number[]): number[][] {
//     let res = []
//     let i: number = 0
//     const len = intervals.length;
//     while (i < len && intervals[i][1] < newInterval[0]) { // 当前遍历的是蓝左边的，不重叠的区间
//         res.push(intervals[i]);
//         i++;
//     }
//     while (i < len && intervals[i][0] <= newInterval[1]) { // 当前遍历是有重叠的区间
//         newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
//         newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
//         i++;
//     }
//     res.push(newInterval); // 循环结束后，兰区间为合并后的区间，推入res
//     while (i < len) {                 // 在蓝右边，没重叠的区间
//         res.push(intervals[i]);
//         i++;
//     }
//     return res;
// };

// console.log(insert([[1, 3], [6, 9]], [2, 5]))
// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
// console.log(insert([], [4, 8]))
// console.log(insert([[1, 2]], [4, 8]))
// console.log(insert([[1, 5]], [0, 0]))
// console.log(insert([[1, 5], [6, 8]], [5, 6]))
// console.log(insert([[3, 5], [12, 15]], [6, 6]))