/**
 * 这里有一个需要注意的点是，在js中，数字判断时，0的判断
 */
class MinStack {
    stack1:number[] = []; // 主栈
    stack2:number[] = []; // 辅助栈，记录最小值排序
    constructor() {

    }

    push(x: number): void {
        const len = this.stack2.length
        const item = len ? this.stack2[len -1] : null
        this.stack1.push(x)
        // 如果输入的元素比辅助栈顶元素小，则插入辅助栈，说明当前最小的栈中元素是新插入的这个值
        if((!item && item !== 0) || x <= item){
            this.stack2.push(x)
        }
        console.log(this.stack2)
    }

    pop(): void {
        const len = this.stack2.length
        const target = len ? this.stack2[len -1] : null
        const item = this.stack1.pop();
        // 如果值和辅助栈顶元素一致，则辅助栈需要出栈操作
        if((target || target === 0) && target === item){
            this.stack2.pop()
        }
    }

    top(): number {
        const len = this.stack1.length
        if(len || len === 0){
            return this.stack1[len -1]
        }else{
            return null
        }
    }

    min(): number {
        const len = this.stack2.length
        const target = len ? this.stack2[len -1] : null
        return target
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

