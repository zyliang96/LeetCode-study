/**
 * 假设背包的最大重量为4
 * 这里注意，所有物品应该是只能放一次
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
    dp[i] = [0]
  }

  // 初始化数据，物品0的价值在背包中永远为value[0]
  for (let i = wight[0]; i <= bagWeight; i++) {
    dp[0][i] = value[0]
  }


  for (let i = 1; i < wightLen; i++) {
    for (let j = 0; j <= bagWeight; j++) {
      // console.log(j, wight[i])
      if (j < wight[i]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wight[i]] + value[i]);
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
    for (let j = bagWeight; j >= wight[i]; j--) {
      // console.log(j, wight[i])
      dp[j] = Math.max(dp[j], dp[j - wight[i]] + value[i])
    }
    console.log(dp)
  }
  return dp[bagWeight]
}


function bag() {
  let weight = [1, 3, 4, 5];
  let value = [15, 20, 30, 55];

  // console.log(weightBag(weight, value, 6))
  console.log(singleWeightBag(weight, value, 6))
}

bag()



function testweightbagproblem(wight, value, size) {
  const len = wight.length,
    dp = Array.from({ length: len + 1 }).map(
      () => Array(size + 1).fill(0)
    );

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= size; j++) {
      if (wight[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          value[i - 1] + dp[i - 1][j - wight[i - 1]]
        )
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
    // console.log(dp)
  }

  //   console.table(dp);

  return dp[len][size];
}

function testWeightBagProblem2(wight, value, size) {
  const len = wight.length,
    dp = Array(size + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    for (let j = size; j >= wight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
    }
  }
  return dp[size];
}


function test() {
  console.log(testweightbagproblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();