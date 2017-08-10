var expect    = require("chai").expect;
var TreeFunctor     = require("../functors/tree-functor");


describe("Tree functor", function() {
	it("should create an tree functor object", function() {
		treeFunctor = TreeFunctor.of(1,2,3,4,5,6);
		expect(treeFunctor.toString()).to.eq("( 1 ( 2 ( 4 ) ( 5 ) ) ( 3 ( 6 ) ) )");
	});
	it("should implement map", function() {
		treeFunctor = TreeFunctor.of(1,2,3,4).map(function(x) {return 2*x;});
		expect(treeFunctor.toString()).to.eq("( 2 ( 4 ( 8 ) ( 10 ) ) ( 6 ( 12 ) ) )");
	});

	it("should allow composition of map", function() {
		treeFunctor = TreeFunctor.of(1,2,3,4).map(function(x) {return 2*x;}).map(function(x) {return x + 1});
		expect(arrayFunctor.toString()).to.eq("( 3 ( 5 ( 9 ) ( 11 ) ) ( 7 ( 13 ) ) )");
	});
});