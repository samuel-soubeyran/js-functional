var expect = require("chai").expect;
var ArrayApplicative = require("../applicatives/array-applicative");

describe("Array applicative", function() {
 it("should implement apply", function() {
   arrayApplicative = ArrayApplicative.of(function(x) {return 2*x;},function(x) {return 2+x;}).apply(ArrayApplicative.of(1, 2));
   expect(arrayApplicative.__value).to.be.an('array').to.deep.equal([2,4,3,4]);
 });

 it("should support currying with apply", function() {
   var add = function(x) {return function(y) {return x+y;};};
   arrayApplicative = ArrayApplicative.of(add).apply(ArrayApplicative.of(1, 2)).apply(ArrayApplicative.of(3, 4));
   expect(arrayApplicative.__value).to.be.an('array').to.deep.equal([4,5,5,6]);
 });

 it("should support currying with map and apply", function() {
   var add = function(x) {return function(y) {return x+y;};};
   arrayApplicative = ArrayApplicative.of(1,2).map(add).apply(ArrayApplicative.of(3, 4));
   expect(arrayApplicative.__value).to.be.an('array').to.deep.equal([4,5,5,6]);
 });
});
