var MinStack = function() {
    this.stack = [];
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min === null) {
        this.stack.push([val, val]);
        this.min = val;
    } else if (this.min > val) {
        this.stack.push([val, val]);
        this.min = val;
    } else {
        this.stack.push([val, this.min]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length) {
        this.stack.pop();
        if (this.stack.length) {
            this.min = this.stack[this.stack.length - 1][1];
        } else {
            this.min = null;
        }      
    };
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};