/**
 * 思路：
 * 排序，然后合并
 * @param intervals 
 */
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let left:number = -1
    let queue: number[][] = [];
    const len = intervals.length
    for (let i = 0; i < len; i++) {
        if (left === -1 || queue[left][1] < intervals[i][0]) {
            queue[++left] = intervals[i]
        } else {
            queue[left][1] = Math.max(queue[left][1], intervals[i][1])
        }
    }
    return queue
};

console.log(merge([[1, 4], [4, 5]]))