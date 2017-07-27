var expect    = require("chai").expect;
var ArrayFunctor     = require("../functors/array-functor");

describe("Array functor", function() {
	it("should create an array functor object", function() {
		arrayFunctor = ArrayFunctor.of(1,2,3,4);
		expect(arrayFunctor.__value).to.be.an('array').to.deep.equal([1,2,3,4]);
	});

	it("should implement map", function() {
		arrayFunctor = ArrayFunctor.of(1,2,3,4).map(function(x) {return 2*x;});
		expect(arrayFunctor.__value).to.be.an('array').to.deep.equal([2,4,6,8]);
	});

	it("should allow composition of map", function() {
		arrayFunctor = ArrayFunctor.of(1,2,3,4).map(function(x) {return 2*x;}).map(function(x) {return x + 1});
		expect(arrayFunctor.__value).to.deep.equal([3,5,7,9]);
	});
});