/**
 * 剑指 Offer 05. 替换空格
 * @param s 
 */
function replaceSpace(s: string): string {
  let list = [];
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      list.push('%20');
    } else {
      list.push(s[i])
    }
  }
  return list.join('')
};
console.log(replaceSpace("We are happy."))
