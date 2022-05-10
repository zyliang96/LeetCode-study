/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {}
// @lc code=end
var promise = new Promise(resolve=>{
    console.log(1);
    resolve()
})
 
requestAnimationFrame(() => {console.log(2)})
 
setTimeout(()=>{
    console.log(3);
})
 
promise.then(()=>{
	
    console.log(4);
    requestAnimationFrame(() => {console.log(5)})
})
 
var promise2=getPromise();
 
async function getPromise(){
    console.log(6);
    await promise;
    console.log(7);
}
console.log(8);

18 24657  3

168  4725 3