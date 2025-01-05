

// 2667. Create Hello World Function

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


//-------------------------------------------------------------//

// 2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter_start = n;
    let call_counter = [];
    return function() {
        call_counter.push(counter_start);
        return counter_start++;
    };
};