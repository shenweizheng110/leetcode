/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this._value = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const existedIdx = this._value.findIndex(item => item === key);
    if (existedIdx === -1) {
        this._value.push(key)
        return
    }
    this._value[existedIdx] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const existedIdx = this._value.findIndex(item => item === key);
    if (existedIdx !== -1) {
        this._value.splice(existedIdx, 1)
    }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this._value.some(item => item === key)
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var obj = new MyHashSet()
obj.add(1)

console.log(obj)