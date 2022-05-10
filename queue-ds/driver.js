const Queue = require('./queue');

let queue = new Queue();

queue.add("Hello");
queue.add("World");
queue.add("I coded");
queue.add("This Queue");
queue.add("Data Structure");

console.log(queue.size());
console.log(queue.front());
console.log(queue.peek());