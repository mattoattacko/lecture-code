let numbers = [1,2,3];
let myCallback = n => n*2;

function mapCall(list, callback) {
  return Array.prototype.map.call(list, callback);
}

function mapApply(list, callback) {
  callback = Array.isArray(callback) ? callback : [callback];
  return Array.prototype.map.apply(list, callback);
}

let mapBind = function() {
  return Array.prototype.map.call(this.n, this.cb);
}.bind( {n:numbers, cb:myCallback} );


console.log( mapCall(numbers, myCallback) );
console.log( mapApply(numbers, myCallback) );
console.log( mapBind() );
