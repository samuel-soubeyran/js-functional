var expect    = require("chai").expect;
var MaybeFunctor     = require("../functors/maybe-functor");

describe("Maybe functor", function() {
	it("should create a non empty maybe functor object", function() {
		maybeFunctor = MaybeFunctor.of(1);
		expect(maybeFunctor.isEmpty()).to.be.false;
	});

	it("should create an empty maybe functor", function() {
		maybeFunctor = MaybeFunctor.of(null);
		expect(maybeFunctor.isEmpty()).to.be.true;
	});

	it("should implement map for non empty Maybe", function() {
		maybeFunctor = MaybeFunctor.of(1).map(function(x) {return x + 3;});
		expect(maybeFunctor.isEmpty()).to.be.false;
		expect(maybeFunctor.__value).to.equal(4);
	});

	it("should implement map for empty Maybe", function() {
		maybeFunctor = MaybeFunctor.of(null).map(function(x) {return x + 3;});
		expect(maybeFunctor.isEmpty()).to.be.true;
	});

	it("should allow chaining of map for non empty Maybe", function() {
		maybeFunctor = MaybeFunctor.of(1).map(function(x) {return x + 3;}).map(function(x) {return x * 2});
		expect(maybeFunctor.isEmpty()).to.be.false;
		expect(maybeFunctor.__value).to.equal(8);
	})


	it("should allow chaining of map for empty Maybe", function() {
		maybeFunctor = MaybeFunctor.of(null).map(function(x) {return x + 3;}).map(function(x) {x * 2});
		expect(maybeFunctor.isEmpty()).to.be.true;
	})
});