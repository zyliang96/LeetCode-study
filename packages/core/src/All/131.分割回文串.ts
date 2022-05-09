/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// TODO 待做
// @lc code=start
function partition(s: string): string[][] {
  // 判断是否是回文串
  const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  }

  let result = [];
  let len = s.length
  function dfs(index, temp = []) {
    if (index >= len) {
      result.push(temp.slice())
      return
    }

    for (let i = index; i < len; i++) {
      if (!isPalindrome(s, index, i)) {
        continue
      }
      temp.push(s.substr(index, i - index + 1));
      dfs(i + 1, temp)
      temp.pop()
    }
  }
  dfs(0, []);
  return result
};

console.log(partition('aab'))
// @lc code=end

