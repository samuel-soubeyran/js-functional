var expect = require("chai").expect;
var ZiplistApplicative = require("../applicatives/ziplist-applicative");

describe("Ziplist applicative", function() {
 it("should implement apply", function() {
   var orig = new ZiplistApplicative([function(x) {return 2*x;},function(x) {return 2+x;}]);
   var ziplistApplicative = orig.apply(new ZiplistApplicative([1, 2]));
   expect(ziplistApplicative.__value).to.be.an('array').to.deep.equal([2,4]);
 });

 it("should support currying with apply", function() {
   var add = function(x) {return function(y) {return x+y;};};
   var ziplistApplicative = ZiplistApplicative.of(add).apply(new ZiplistApplicative([1, 2])).apply(new ZiplistApplicative([3, 4]));
   expect(ziplistApplicative.__value).to.be.an('array').to.deep.equal([4,6]);
 });

 it("should support currying with map and apply", function() {
   var add = function(x) {return function(y) {return x+y;};};
   var ziplistApplicative = (new ZiplistApplicative([1,2])).map(add).apply(new ZiplistApplicative([3, 4]));
   expect(ziplistApplicative.__value).to.be.an('array').to.deep.equal([4,6]);
 });
});
