/**
 * 假设背包的最大重量为4
 * 这里注意，所有物品可以放无数次
 * 物品为：
 * 	    重量	价值
  物品0	  1	  15
  物品1	  3	  20
  物品2	  4	  30
 */

/**
* 这是二维数组的方式
* @param wight 
* @param value 
* @param bagWeight 
* @returns 
*/
function weightBag(wight, value, bagWeight) {
  let dp = [];
  let wightLen = wight.length;
  for (let i = 0; i < wightLen; i++) {
    dp[i] = Array(bagWeight + 1).fill(0)
  }

  for (let i = 0; i < wightLen; i++) {
    for (let j = 0; j <= bagWeight; j++) {
      // console.log(j, wight[i])
      if (j >= wight[i]) {
        dp[i][j] = Math.max(dp[i - 1 < 0 ? 0 : i - 1][j], dp[i - 1 < 0 ? 0 : i - 1][j - wight[i]] + value[i])
      }
    }
    // console.log(dp)
  }
  return dp[wightLen - 1][bagWeight]
}


/**
 * 一位数组的方式
 */
function singleWeightBag(wight, value, bagWeight) {
  let dp = [];
  let wightLen = wight.length;
  for (let i = 0; i <= bagWeight; i++) {
    dp[i] = 0
  }
  for (let i = 0; i < wightLen; i++) {
    // TODO 这个需要特别注意，遍历的顺序，一定要从顶部往下遍历，这样才不会重复相加基础值,还有终止条件，背包可以存放的数量到对应值就基本可以确定了，不需要再判断比其小的值
    for (let j = wight[i]; j <= bagWeight; j++) {
      // console.log(j, wight[i])
      if (j >= wight[i]) {
        dp[j] = Math.max(dp[j], dp[j - wight[i]] + value[i])
      }
    }
    console.log(dp)
  }
  return dp[bagWeight]
}


function bag() {
  let weight = [1, 3, 4, 5];
  let value = [15, 20, 30, 55];

  // console.log(weightBag(weight, value, 6))
  console.log(singleWeightBag(weight, value, 4))
}

bag()