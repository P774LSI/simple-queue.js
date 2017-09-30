# simple-queue.js
A simple queue data structure in pure JavaScript.


# Requirements
ES5 or higher.

Why?
`Array.prototype.indexOf()` used in this library.
If your host environment for JavaScript is ES3 or lower, can't use `.indexOf()` method.
However, you can polyfill the `Array.prototype.indexOf()` method.
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf>


# Basic Usage
    var myQueue = new Queue();
    myQueue.enqueue('myData1');
    myQueue.enqueue('myData2');
    myQueue.dequeue();  // myData1
    myQueue.dequeue();  // myData2


# APIs
    .enqueue(data)
    .dequeue()
    .peek()
    .getLength()
    .getMaxLength()
    .setMaxLength(maxLength)
    .isEmpty()
    .isFull()
    .indexOf(searchElement, fromIndex)
    .remove(fromIndex, howMany)
    .toString()

More information