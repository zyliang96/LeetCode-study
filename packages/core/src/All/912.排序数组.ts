/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start

/**
 * 冒泡排序
 * 冒泡排序是通过比较前后两个数的大小来决定顺序的，通过两层循环，来使得每次每一个都在正确的位置上
 * 算法描述
   1 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
   2 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
   3 针对所有的元素重复以上的步骤，除了最后一个；
   4 重复步骤1~3，直到排序完成。
 * @param nums 
 */
function BubbleSort(nums: number[]): number[] {
    const len = nums.length;
    // 第一层是需要比较次数
    for (let i = 0; i < len - 1; i++) {
        // 第二层是数组中两个相邻的数据两两比较，将最大的放到最后，随着循环的次数增大，确定的位数越多，需要的比较次数越来越小
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
};

/**
 * 选择排序
 * 选择排序的思想，是选择当前位置最合适的数据。首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。 
 * @param nums 
 * @returns 
 */
function SelectSort(nums: number[]): number[] {
    const len = nums.length;
    // 遍历len - 1 次 ，每一次都找到第i个位置上适合的数字
    for (let i = 0; i < len - 1; i++) {
        // 当前的index 值 
        let index = i;
        // 从 i + 1 开始遍历，找到 i 这个位置最合适的数字，并替换当前的index值为j
        for (let j = i + 1; j < len; j++) {

            if (nums[j] < nums[index]) {
                index = j
            }
        }
        // index 和 i 不相等的时候才进行交换
        if (index !== i) {
            const temp = nums[index]
            nums[index] = nums[i]
            nums[i] = temp
        }
    }
    return nums
};

/**
 * 插入排序
 * 插入排序的逻辑是，将前面的排好序，然后将当前位置的插入到前面有序的序列中
 * @param nums 
 * @returns 
 */
function InsertionSort(nums: number[]): number[] {
    const len = nums.length;

    function exchange(i, j) {
        const temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp
    }
    /**
     * 方法1
     * 问题在于，每次都进行了比较，并且频繁移动位置
     */
    // // 遍历次数
    // for (let i = 0; i < len; i++) {
    //     // 遍历前面的数据，然后将当前数据插入后再次排序
    //     for (let j = 0; j < i; j++) {
    //         if (nums[i] < nums[j]) {
    //             exchange(i,j)
    //         }
    //     }
    // }

    /**
     * 方法2
     * 从后往前排序，从后往前
     */
    // // 遍历次数
    // for (let i = 1; i < len; i++) {
    //     // 遍历前i个数，然后使前i个数有序
    //     for (let j = i; j > 0; j--) {
    //         if (nums[j] < nums[j - 1]) {
    //             exchange(j, j - 1)
    //         }
    //     }
    // }


    /**
     * 方法3
     * 通过二分查找的方式优化
     */
    for (let i = 1; i < len; i++) {
        const item = nums[i];
        let left = 0, right = i;
        // 利用二分查找 在前i个有序的数据找到要插入的位置，最终结果则right肯定比left小，此时left就是要插入的位置
        while (left < right) {
            const mid = left + ((right - left) >> 1);
            if (nums[mid] > item) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        // 将left值后的所有数据都向右移动一位
        for (let j = i; j > left; j--) {
            nums[j] = nums[j - 1]
        }
        // 将left处的值设置为对应值
        nums[left] = item
    }

    return nums
};



/**
 * 希尔排序
 * 第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。
 * 希尔排序的关键在于设置分组，因为分组的程度将决定运算的复杂程度
 * 算法描述
 * 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：
    1. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
    2. 按增量序列个数k，对序列进行k 趟排序；
    3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
 * @param nums 
 * @returns 
 */
function ShellSort(nums: number[]): number[] {
    const len = nums.length;
    // 默认的遍历次数是一次
    let h = 1;
    // 这里循环是找到一个合适的分组大小，网上的一些归并排序是按照2来进行的，这个3是我看算法第四版中的实现流程中是按照这个逻辑处理的，暂时还不清楚
    while (h < Math.floor(len / 3)) {
        h = 3 * h + 1;
    }
    // 这个是需要比较的次数
    while (h >= 1) {
        // 从 h 开始遍历，并且确保这之前的分组都是有序的，这里实际排序的时候，是连续处理的，不是分组处理的
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && nums[j] < nums[j - h]; j -= h) {
                const temp = nums[j]
                nums[j] = nums[j - h]
                nums[j - h] = temp
            }
        }
        // 将h除以三，进行缩小
        h = Math.floor(h / 3)
    }
    return nums
};




/**
 * 归并排序
 * 归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并
 * 算法描述
    1. 把长度为n的输入序列分成两个长度为n/2的子序列；
    2. 对这两个子序列分别采用归并排序；
    3. 将两个排序好的子序列合并成一个最终的排序序列。
 * @param nums 
 * @returns 
 */
function MergeSort(nums: number[]): number[] {
    const len = nums.length;
    // 合并两个已经有序的列表，这里需要注意的是，right应该取=，注意边界问题
    function merge(target, list, left, mid, right) {
        for (let i = left; i <= right; i++) {
            list[i] = target[i];
        }

        let l = left, r = mid + 1;
        for (let i = left; i <= right; i++) {
            // 如果左边已经排完了，这个时候，就直接把右边的赋值即可
            if (l > mid) {
                target[i] = list[r++]
            } else if (r > right) {
                // 如果右侧已经排完了，这个时候，就直接把左侧的赋值即可
                target[i] = list[l++]
            } else if (list[l] > list[r]) {
                // 右侧的数据比左侧小，则当前位置用右侧的数据，然后右侧计数+1
                target[i] = list[r++]
            } else {
                // 左侧的数据比较小，则当前位置用左侧的数据，然后左侧计数+1
                target[i] = list[l++]
            }
        }
    }
    // 排序，利用二分的方式归并
    // function sort(target, list, left, right) {
    //     if (right <= left) {
    //         return
    //     }
    //     const mid = left + ((right - left) >> 1);
    //     sort(target, list, left, mid)
    //     sort(target, list, mid + 1, right)
    //     merge(target, list, left, mid, right)

    // }

    // 自底向上的归并排序
    function sort(target, list, left, right) {
        const len = right - left
        for (let i = 1; i <= len; i *= 2) {
            for (let j = left; j <= right - i; j += i + i) {
                const mid = j + i - 1;
                const end = Math.min(j + i + i - 1, right)
                merge(target, list, j, mid, end)
            }
        }

    }
    let copyList = []
    sort(nums, copyList, 0, len - 1)
    return nums
};


/**
 * 快速排序
 * 快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。建立在归并的基础上，只是在遍历的过程中就先将数据做了大小的一些处理
 * 算法描述
    1. 从数列中挑出一个元素，称为 “基准”（pivot）；
    2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
    3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
 * @param nums 
 * @returns 
 */
function QuickSort(nums: number[]): number[] {
    const len = nums.length;
    function exchange(i, j) {
        const temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp
    }

    /**
     * TODO 方法1 基本的快速排序方法
     */
    // 合并两个已经有序的列表，这里需要注意的是，right应该取=，注意边界问题
    // function partition(list, start, end) {
    //     let left = start;
    //     // 这里 +1 是为了后续统一使用--end 的逻辑
    //     let right = end + 1;
    //     let target = list[left];
    //     while (true) {
    //         // 先遍历小于当前位置的
    //         while (list[++left] < target) {
    //             if (left === end) {
    //                 break
    //             }
    //         }
    //         // 遍历右侧小于当前值的
    //         while (target < list[--right]) {
    //             if (right === start) {
    //                 break
    //             }
    //         }
    //         // 如果start 大于等于 end 的时候，则说明比较完成，跳出循环。 
    //         if (left >= right) {
    //             break
    //         }
    //         // 经过前两次遍历，则可以找到左边第一个大于目标的，右边第一个小于目标的，这个时候交换这两个值的位置
    //         exchange(left, right)
    //     }
    //     // 这个时候交换目标值和start的位置，这个试试
    //     exchange(start, right)
    //     return right
    // }

    // function sort(list, start, end) {
    //     if (start < end) {
    //         let partitionIndex = partition(list, start, end);
    //         sort(list, start, partitionIndex)
    //         sort(list, partitionIndex + 1, end)
    //     }
    // }

    /**
     * TODO 方法2 三分法快排
     */
    //     function sort(list, start, end) {
    //         if (end <= start) {
    //             return
    //         }
    //         // 左右节点
    //         let left = start, right = end;
    //         // 目标值
    //         let target = list[start];
    //         // 遍历数据
    //         let i = start + 1;
    //         // 没有遍历完成的时候，经过这一步操作之后，[start,left-1]都是小于target的数据，[left,right]都是等于target的数据，[right+1,end]都是大于target的数据
    //         // 这里格外需要注意，i 的判断是和right进行的，i如果大于right了，实际上right右侧的已经是所有大于target的数据了
    //         while (i <= right) {
    //             // list[i] 小于 target 的时候，交换left和right的值，并且都进行+1处理
    //             if (list[i] < target) {
    //                 exchange(i++, left++)
    //             } else if (list[i] > target) {
    //                 // list[i] 大于 target 的时候， 将 i 和 right 的值进行互换
    //                 exchange(i, right--)
    //             } else {
    //                 // list[i] 等于 target 的时候，值进行i的增加，是循环比那里下去
    //                 i++
    //             }
    //         }

    //         sort(list, start, left - 1)
    //         sort(list, right + 1, end)
    //     }
    //     sort(nums, 0, len - 1)
    //     return nums
    // };


    /**
     * TODO 方法3 快排优化 
     */
    function insertionSort(list: Array<number>, left: number, right: number): void {
        for (let i = left; i <= right; i++) {
            for (let j = i; j > 0; j--) {
                // 这里是从后往前比
                if (list[j] < list[j - 1]) {
                    exchange(j, j - 1);
                }
            }
        }
    }


    function median3(list: Array<number>, left: number, middle: number, right: number) {
        return (list[left] < list[middle]) ?
            (((list[middle] < list[right])) ? middle : list[left] < list[right] ? right : left) :
            ((list[right] < list[middle]) ? middle : list[right] < list[left] ? right : left)
    }

    function partition(list: Array<number>, start: number, end: number): number {
        // 这里找一个相对中间的数字，只是一种尝试
        let middleNum = median3(list, start, start + ((end - start) >> 1), end)
        exchange(start, middleNum)
        let left = start;
        // 这里 +1 是为了后续统一使用--end 的逻辑
        let right = end + 1;
        let target = list[left];
        // 先遍历小于当前位置的，如果和
        while (list[++left] < target) {
            if (left === end) {
                exchange(start, end)
                return end
            }
        }
        // 遍历右侧小于当前值的
        while (target < list[--right]) {
            if (right === start + 1) {
                return left
            }
        }
        // left 小于 right 的时候 说明还没有完全筛选，这个时候再次分组
        while (left < right) {
            // 小交换，因为上面的逻辑找到了左边第一个大于目标的，右边第一个小于目标的
            exchange(left, right)
            while (list[++left] < target) { }
            while (target < list[--right]) { }
        }
        // 这个时候交换目标值和start的位置，这个试试
        exchange(start, right)
        return right
    }

    const INSERTION_SORT_CUTOFF = 8
    function sort(list, start, end) {
        if (end <= start) {
            return
        }
        if (end < start + INSERTION_SORT_CUTOFF) {
            insertionSort(list, start, end)
            return
        }
        let i = partition(list, start, end)
        sort(list, start, i - 1)
        sort(list, i + 1, end)
    }
    sort(nums, 0, len - 1)
    return nums
};

/**
 * 堆排序
 * 堆排序如果是从大到小的排列，则构建最大堆，然后将堆顶元素放到数组最后一位，然后再构建新的最大堆
 * 算法描述
    1、将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
    2、将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]；
    3、由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
 * @param nums 
 */
function heapSort(nums: number[]): number[] {

    function exchange(list, i, j) {
        const temp = list[j];
        list[j] = list[i];
        list[i] = temp
    }
    function sortBase(list: number[], start?: number, end?: number) {
        // start如果不存在，则直接设置为0
        if (!start) {
            start = 0
        }
        // end不存在则设置为列表长度
        if (!end && end !== 0) {
            end = list.length - 1
        }
        // 如果开始位置大于结束位置，则直接抛出错误
        if (start > end) {
            throw new RangeError(`start in must less than end`)
        }
        // 构建有序的最大堆
        for (let i = (start + ((end - start) >> 1)); i >= 0; i--) {
            sink(list, i, end)
        }
        let i = end
        // 使堆变成有序的列表
        while (i > 0) {
            // 因为堆本身是最大堆，所以将堆顶最大的数据放到最后即可
            exchange(list, 0, i--)
            // 重新构建最大堆
            sink(list, 0, i)
        }
    }

    /**
     * 下沉
     */
    function sink(list: number[], index: number, len: number) {
        while (2 * index <= len) {
            let j = 2 * index
            if (j < len && list[j] < list[j + 1]) {
                j++
            }
            if (list[index] >= list[j]) {
                break
            }
            exchange(list, index, j)
            index = j
        }
    }
    sortBase(nums, 0, nums.length - 1)
    return nums
}

/**
 * 计数排序
 * 其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数
 * 算法描述
    1、找出待排序的数组中最大和最小的元素；
    2、统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
    3、对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
    4、反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
 * @param nums 
 */
function sortArray(nums: number[]): number[] {
    
}

// var a = [5, 2, 1, 3, 4, 8, 9]
var a = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]
// var a = [5, 2, 3, 1]
var result = sortArray(a)
console.log(result)
// @lc code=end

