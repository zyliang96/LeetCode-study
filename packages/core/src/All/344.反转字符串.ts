/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */

/**
 * 双指针，分别指向首尾，然后交换首尾元素
 * @param s 
 */
function reverseString(s: string[]): void {
  let i = 0, j = s.length - 1;
  while (i <= j) {
    const temp = s[j]
    s[j] = s[i];
    s[i] = temp

    i++;
    j--;
  }
  // console.log(s)
};

// console.log(reverseString(["h", "e", "l", "l", "o","w"]))
// @lc code=end

