/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  let ransomNoteLen = ransomNote.length, magazineLen = magazine.length;
  if (ransomNoteLen > magazineLen) {
    return false
  }

  let map = {}, i = 0, j = 0;
  while (i < ransomNoteLen || j < magazineLen) {
    if (i < ransomNoteLen) {
      if (map[ransomNote[i]]) {
        map[ransomNote[i]] -= 1
      } else {
        map[ransomNote[i]] = -1
      }
    }

    if (j < magazineLen) {
      if (map[magazine[j]]) {
        map[magazine[j]] += 1
      } else {
        map[magazine[j]] = 1
      }
    }
    if (ransomNote[i] && map[ransomNote[i]] === 0) {
      delete map[ransomNote[i]]
    }

    if (magazineLen[j] && map[magazineLen[j]] === 0) {
      delete map[magazine[j]]
    }

    i++;
    j++;

  }
  let result = Object.keys(map).filter((key) => {
    return map[key] < 0
  })
  console.log(result)
  return result.length === 0
};

console.log(canConstruct("aa", "aab"))
// @lc code=end

