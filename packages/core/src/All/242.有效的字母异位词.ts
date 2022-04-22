/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  let sLen = s.length, tLen = t.length, sIndex = 0, tIndex = 0;
  // 长度不等的时候，一定不符合要求
  if (sLen !== tLen) {
    return false
  }
  let map = {};
  while (sIndex < sLen && tIndex < tLen) {
    const sChar = s.charAt(sIndex)
    const tChar = t.charAt(tIndex)
    if (map[sChar] || map[sChar] === 0) {
      map[sChar] += 1;
    } else {
      map[sChar] = 1
    }

    if (map[tChar] || map[tChar] === 0) {
      map[tChar] -= 1;
    } else {
      map[tChar] = -1
    }
    if (map[tChar] === 0) {
      delete map[tChar]
    }
    if (map[sChar] === 0) {
      delete map[sChar]
    }
    sIndex++;
    tIndex++;
  }
  // console.log(map)
  return Object.keys(map).length === 0
};

// console.log(isAnagram("anagram", "nagaram"))
// @lc code=end

