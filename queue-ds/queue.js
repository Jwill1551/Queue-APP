var Queue = (() => {
    const key = {};
    const items = new WeakMap();

    class Queue {
        constructor(){
        items.set(key, []);
        }

        add(data){
            let queue = items.get(key);
            queue.push(data);
        }

        remove(){
            let queue = items.get(key);
            return queue.shift();
        }

        peek(){
            let queue = items.get(key);
            return queue[queue.length - 1];
        }

        front(){
            let queue = items.get(key);
            return queue[0];
        }

        clear(){
            items.set(key, []);
        }

        size(){
            return items.get(key).length;
        }
    }

    return Queue;
}) ();


// AMD 
if(typeof define === 'function' && define.amd){
    define(function() { return Queue; });
} // NodeJS/CommonJS 
else if (typeof exports === 'object'){
    if(typeof module === 'object' && typeof module.exports === 'object') {
        exports = module.exports = Queue;
    } else {
        // Browser
        window.Queue = Queue;
    }
}