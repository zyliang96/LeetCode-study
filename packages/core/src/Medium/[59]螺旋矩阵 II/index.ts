
function generateMatrix(n: number): number[][] {
    const len = n * n
    let num = 0;
    let left = 0,
        right = n,
        top = 0,
        bottom = n;
    let queue: number[] = []
    while (num < len) {
        for (let i = left; i < right && num > 0; i++) {
            queue.push(matrix[left][i])
            num--
        }
        top++;
        for (let i = top; i < bottom && num > 0; i++) {
            console.log(i, right)
            queue.push(matrix[i][right - 1])
            num--
        }
        right--
        for (let i = right - 1; i >= left && num > 0; i--) {
            queue.push(matrix[bottom - 1][i])
            num--
        }
        bottom--
        for (let i = bottom - 1; i >= top && num > 0; i--) {
            queue.push(matrix[i][left])
            num--
        }
        left++
    }
};