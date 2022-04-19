function spiralOrder(matrix: number[][]): number[] {
  let left: number = 0,
      right: number = matrix[0].length,
      top: number = 0,
      bottom: number = matrix.length;
  let num = matrix.length * matrix[0].length;
  let queue: number[] = []
  while (num > 0) {
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
  return queue
};