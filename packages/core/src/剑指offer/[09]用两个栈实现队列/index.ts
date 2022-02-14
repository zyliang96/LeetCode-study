class CQueue {
    stack1: number[] = [];
    stack2:number[] = []
    constructor() {
        
    }

    appendTail(value: number): void {
        this.stack1.push(value)
    }

    deleteHead(): number {
        // 删除的时候，如果第二个栈为空，那么就将栈1的数据塞入到栈二中，这样，栈1中的数据就倒序到了栈二，从而实现队列效果
        if(!this.stack2.length){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(!this.stack2.length){
            return -1
        }else{
            const item = this.stack2.pop()
            return item
        }
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */