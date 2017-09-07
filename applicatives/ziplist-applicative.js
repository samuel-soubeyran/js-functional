// For example new ZiplistApplicative([a, b, c, ...])
var ZiplistApplicative = function(value) {
 this.__value = value;
}

// For example ZiplistApplicative.of(curriedAdd)
ZiplistApplicative.of = function(f) {
 return new ZiplistApplicative(Array(1000).fill(f));
}

ZiplistApplicative.prototype.map = function(f) {
 var arr = [];
 for (var i in this.__value) {
   arr[i] = f(this.__value[i]);
 }
 return new ZiplistApplicative(arr);
}

/*
Expected behavior:
return a new array applicative where each element
is the result of applying each f of the current array applicative on
the corresponding x of the input array applicative.
*/
ZiplistApplicative.prototype.apply = function(xs) {
}

module.exports = ZiplistApplicative;
