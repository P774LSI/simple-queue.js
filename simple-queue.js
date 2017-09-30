/**
 * @name 'Simple Queue'
 * @version '1.0.1'
 * @author 'P-774LSI'
 * @license 'MIT License'
 */

// Queue constructor.
/**
 * Create a new instance of a queue.
 *
 * @static
 * @param {integer} [maxLength=Infinity] Optional. An integer indicating the maximum length limit of elements in the array of queue. Default is unlimited.
 * @param {...*} datas Optional. An additional data(s).
 * @example
 *
 * var myQueue1 = new Queue();
 * var myQueue2 = new Queue(10);  // Set the maximum length limit to 10.
 * var myQueue3 = new Queue(-1, 'myData', function myFunc() { console.log('queue test') }, 111);
 */
function Queue(maxLength, data1/*, data2, data3, ..., dataN*/) {
    var i = 1,
        argsLength =  arguments.length;

    this.array = [];
    this.maxLength;
    this.setMaxLength(maxLength);

    if (argsLength >= 2) {
        for (; i < argsLength && this.array.length < this.maxLength; i++) {
            this.array.push(arguments[i]);
        }
    }
};

// Queue prototype.
/**
 * Enqueue a data.
 *
 * @static
 * @memberOf Queue
 * @param {*} data Required. An additional data.
 * @returns {boolean} Returns true if an enqueueing was successful, false on failure.
 * @example
 *
 * var myQueue = new Queue();
 * myQueue.enqueue('myData');
 */
Queue.prototype.enqueue = function(data) {
    if (!this.isFull()) {
        this.array.push(data);
        return true;
    } else {
        return false;
    }
};

/**
 * Dequeue a data.
 *
 * @static
 * @memberOf Queue
 * @returns {*} Returns the oldest data if queue is not empty.
 * @example
 *
 * var myQueue = new Queue(-1, 'myData1', 'myData2');
 * myQueue.dequeue();  // myData1
 * myQueue.dequeue();  // myData2
 */
Queue.prototype.dequeue = function() {
    if (this.array.length) {
        return this.array.shift();
    } else {
        //throw new Error('Queue is empty.');
    }
};

/**
 * Dequeue a data without removing it.
 *
 * @static
 * @memberOf Queue
 * @returns {*} Returns the oldest data if queue is not empty.
 * @example
 *
 * var myQueue = new Queue(-1, 'myData');
 * myQueue.peek();  // myData
 * myQueue.peek();  // myData
 */
Queue.prototype.peek = function() {
    if (this.array.length) {
        return this.array[0];
    } else {
        //throw new Error('Queue is empty.');
    }
};

/**
 * Get the current length of a queue.
 *
 * @static
 * @memberOf Queue
 * @returns {integer} Returns the queue length.
 * @example
 *
 * var myQueue = new Queue(-1, 'myData1', 'myData2');
 * myQueue.getLength();  // 2
 */
Queue.prototype.getLength = function() {
    return this.array.length;
};

/**
 * Get the maximum length limit of a queue.
 *
 * @static
 * @memberOf Queue
 * @returns {integer} Returns the maximum length limit of a queue.
 * @example
 *
 * var myQueue1 = new Queue(10, 'myData');
 * myQueue1.getMaxLength();  // 10
 * var myQueue2 = new Queue();
 * myQueue2.getMaxLength();  // Infinity
 */
Queue.prototype.getMaxLength = function() {
    return this.maxLength;
};

/**
 * Set a new maximum length limit of a queue.
 *
 * Note: Data will not be deleted if you set the maximum length of queue shorter than the current length.
 *
 * @static
 * @memberOf Queue
 * @param {integer} maxLength Required. An integer indicating a new maximum length limit of the queue.
 * @example
 *
 * var myQueue = new Queue(10, 'myData1', 'myData2');
 * myQueue.setMaxLength(3);
 * myQueue.enqueue('myData3');
 * myQueue.enqueue('myData4');
 * myQueue.toString();  // myData1,myData2,myData3
 */
Queue.prototype.setMaxLength = function(maxLength) {
    // For ES6 or higher.
    //this.maxLength = (Number.isInteger(maxLength) && maxLength >= 0) ? maxLength : Infinity;
    // For lower than ES6.
    this.maxLength = (typeof maxLength === 'number' && isFinite(maxLength) && Math.floor(maxLength) === maxLength && maxLength >= 0) ? maxLength : Infinity;
};

/**
 * Determines whether a queue is empty.
 *
 * @static
 * @memberOf Queue
 * @returns {boolean} Returns true if the queue is empty, else false.
 * @example
 *
 * var myQueue = new Queue(-1, 'myData1');
 * myQueue.isEmpty();  // false
 * myQueue.dequeue();
 * myQueue.isEmpty();  // true
 */
Queue.prototype.isEmpty = function() {
    if (this.array.length === 0) {
        return true;
    } else {
        return false;
    }
};

/**
 * Determines whether a queue is full.
 *
 * @static
 * @memberOf Queue
 * @returns {boolean} Returns true if the queue is full, else false.
 * @example
 *
 * var myQueue = new Queue(2);  // Set the maximum length limit to 2.
 * myQueue.enqueue('myData1');
 * yQueue.isFull();  // false
 * myQueue.enqueue('myData2');  // Now the queue will be full.
 * myQueue.isFull();  // true
 */
Queue.prototype.isFull = function() {
    if (this.array.length >= this.maxLength) {
        return true;
    } else {
        return false;
    }
};

/**
 * Returns first index at which a given value can be found in a queue array, or -1 if a given value does not contain it.
 * This method similar to `Array.prototype.indexOf()` and requirements ES6 or higher.
 *
 *
 * @static
 * @memberOf Queue
 * @returns {integer} Returns the index of the first occurrence of value in the queue array, or -1 if not found.
 * @example
 *
 * var myQueue = new Queue(-1, 'myData1', 'myData2', 'myData3');
 * myQueue.indexOf('myData2');  // 1
 * myQueue.indexOf('myData2', 2);  // -1
 */
Queue.prototype.indexOf = function(searchElement, fromIndex) {
    if (arguments.length > 1) {
        return this.array.indexOf(searchElement, fromIndex);
    } else {
        return this.array.indexOf(searchElement);
    }
};

/**
 * Remove a data from an array of queue by index.
 *
 * @static
 * @memberOf Queue
 * @returns {Array} The changed array of queue.
 * @example
 *
 * var myQueue = new Queue(-1, 'myData1', 'myData2', 'myData3', 'myData4', 'myData5');
 * myQueue.remove(1);  // [ 'myData2' ]
 * myQueue.remove(0, 2);  // [ 'myData1', 'myData3' ]
 * myQueue.remove();  // [ 'myData4', 'myData5' ]
 * myQueue.isEmpty();  // true
 */
Queue.prototype.remove = function(fromIndex, howMany) {
    if (arguments.length === 0) {
        return this.array.splice(0, this.array.length);
    } else if (arguments.length === 1) {
        return this.array.splice(fromIndex, 1);
    } else {
        return this.array.splice(fromIndex, howMany);
    }
};

/**
 * Returns a string that represents the contents of a queue array.
 *
 * @static
 * @memberOf Queue
 * @returns {string} The string representing contents of a queue array.
 * @example
 *
 * var myQueue = new Queue(-1, 'myData1', 'myData2', 'myData3');
 * myQueue.toString()  // myData1,myData2,myData3
 */
Queue.prototype.toString = function() {
    return this.array.toString();
};