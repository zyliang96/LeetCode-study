/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rob(root: TreeNode | null): number {
    // 实际上就是根据每个节点求偷不偷当前节点的最大值，所以需要进行深度优先搜索遍历
    // 递归返回值为数组[不偷当前节点，偷当前节点],
    function dfs(node) {
        if (node === null) {
            return [0, 0];
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        // 不偷当前节点，则为子节点中偷与不偷最大的值的和
        const va1 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        // 偷当前节点，所以当前节点+不偷子节点的值
        const val2 = node.val + left[0] + right[0];

        return [va1, val2];
    }
    const result = dfs(root);
    return Math.max(result[0], result[1]);
}
// @lc code=end
