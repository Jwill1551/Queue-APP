// Return the Queue as a function holding a class
export class Queue {
    constructor() {
        this.items.set(this.qKey, []);
    }
    
    private qKey = {};
    private items = new WeakMap();

    add(element) {
        let queue = this.items.get(this.qKey);
        queue.push(element);
    }

    remove(element) {
        let queue = this.items.get(this.qKey);
        return queue.shift();
    }

    peek() {
        let queue = this.items.get(this.qKey);
        return queue[queue.length - 1];
    }

    front() {
        let queue = this.items.get(this.qKey);
        return queue[0];
    }

    clear() {
        this.items.set(this.qKey, []);
    }

    size() {
        return this.items.get(this.qKey).length;
    }
}
// 'Queue' is wrapped in a IIFE (Immediately Invoked Function Expression)
// This is done so that the 'qkey' and 'items' properties aren't accessed by outside users.