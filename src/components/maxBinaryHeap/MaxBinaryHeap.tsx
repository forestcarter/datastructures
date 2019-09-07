export default class MaxBinaryHeap {
    array: number[];
    constructor() {
        this.array = [];
    }
    insert(value: number) {
        this.array.push(value);
        let index = this.array.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            const parentValue = this.array[parentIndex];
            const childValue = this.array[index];
            if (parentValue > childValue) {
                return this;
            }
            this.array[index] = parentValue;
            this.array[parentIndex] = childValue;
            index = parentIndex;
        }
        return this;
    }

    remove() {
        const popped = this.array.pop();
        if (this.array.length === 0) return this;
        this.array[0] = popped || 0;
        let index = 0;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            const compareIndex =
                this.array[leftIndex] < this.array[rightIndex]
                    ? rightIndex
                    : leftIndex;
            if (this.array[index] < this.array[compareIndex]) {
                const compareValue = this.array[compareIndex];
                this.array[compareIndex] = this.array[index];
                this.array[index] = compareValue;
                index = compareIndex;
                continue;
            }

            return this;
        }
    }
}
