var ArrayApplicative = function(value) {
 this.__value = value;
}

// For example ArrayApplicative.of(1,2,3,4)
ArrayApplicative.of = function() {
 return new ArrayApplicative(Array.prototype.slice.call(arguments));
}

ArrayApplicative.prototype.map = function(f) {
 var arr = [];
 for (var i in this.__value) {
   arr[i] = f(this.__value[i]);
 }
 return new ArrayApplicative(arr);
}

/*
Expected behavior:
return a new array applicative where each element
is the result of applying each f of the current array applicative on
each x of the input array applicative.
*/
ArrayApplicative.prototype.apply = function(xs) {
}

module.exports = ArrayApplicative;
