var expect = require("chai").expect;
var ZiplistApplicative = require("../applicatives/ziplist-applicative");

describe("Ziplist applicative", function() {
 it("should implement apply", function() {
   ziplistApplicative = ZiplistApplicative.of(function(x) {return 2*x;},function(x) {return 2+x;}).apply(ZiplistApplicative.of(1, 2));
   expect(ziplistApplicative.__value).to.be.an('array').to.deep.equal([2,4]);
 });

 it("should support currying with apply", function() {
   var add = function(x) {return function(y) {return x+y;};};
   ziplistApplicative = ZiplistApplicative.of(add, add).apply(ZiplistApplicative.of(1, 2)).apply(ZiplistApplicative.of(3, 4));
   expect(ziplistApplicative.__value).to.be.an('array').to.deep.equal([4,6]);
 });

 it("should support currying with map and apply", function() {
   var add = function(x) {return function(y) {return x+y;};};
   ziplistApplicative = ZiplistApplicative.of(1,2).map(add).apply(ZiplistApplicative.of(3, 4));
   expect(ziplistApplicative.__value).to.be.an('array').to.deep.equal([4,6]);
 });
});
