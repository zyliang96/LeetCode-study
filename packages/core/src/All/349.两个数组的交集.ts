/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let len1 = nums1.length, len2 = nums2.length,i = 0, j =0;
  let list = []
  while(i<len1 || j < len2){
    if(!list[nums1[i]]){
      list[nums1[i]] = 1;
    }
    if(j < len2 && !list[nums2[j]]){
      list[nums2[j]] = 1;
    }

  }

};
// @lc code=end

