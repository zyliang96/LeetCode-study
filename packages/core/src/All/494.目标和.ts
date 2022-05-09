/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  // 首先，通过添加+和-来实现和值为target，那么肯定存在一个+的组合 和一个-的组合，所以即left + right = target;
  // 然后由于分成了两个组合，但是组合的总个数是一致的，所以 left - (sum - left) = target ,left 是 + 的组合
  // left = (sum + target) / 2;
  // 所以问题就变成了， 装满背包left，有多少种方法；
  // target + sum 如果是一个奇数，那么是无解的，因为无法满足这种场景
  // target 的绝对值大于sum，实际上也是无解的，因为目标值比总和都大了，肯定不可能出现
  // 此时的dp[i] 则是 填满i 容积的背包有多少种填发
  // 递推公式应该是：如果已经有一个num[i] 那么就有dp[j-nums[i]] 中方式，然后一致累加

  let sum = 0
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (sum < Math.abs(target)) {
    return 0
  }
  let x = sum + target;
  if (x % 2 === 1) {
    return 0
  }
  let left = sum + target >> 1;
  let dp = Array(left + 1).fill(0);
  // dp[0] 说明的是，在背包容量为0的情况下，只有一种方式，即不装任何东西
  dp[0] = 1
  // 双层遍历，第一层遍历数据，即可放数据，第二层遍历背包
  for (let i = 0; i < len; i++) {
    for (let j = left; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]] 
      // console.log(i, j, dp)
    }
  }
  return dp[left]
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
// @lc code=end

