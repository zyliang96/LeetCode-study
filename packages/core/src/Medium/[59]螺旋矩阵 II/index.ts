
function generateMatrix(n: number): number[][] {
    const len = n * n
    let num = 0;
    let left = 0,
        right = n,
        top = 0,
        bottom = n;
    let queue: number[][] = []
    for (let i = 0; i < n; i++) {
        queue[i] = []
    }
    while (num < len) {
        for (let i = left; i < right && num < len; i++) {
            queue[left][i] = ++num
        }
        top++;
        for (let i = top; i < bottom && num < len; i++) {
            console.log(i, right)
            queue[i][right - 1] = ++num
        }
        right--
        for (let i = right - 1; i >= left && num < len; i--) {
            queue[bottom - 1][i] = ++num
        }
        bottom--
        for (let i = bottom - 1; i >= top && num < len; i--) {
            queue[i][left] = ++num
        }
        left++
    }
    return queue
};

console.log(generateMatrix(3))