var expect    = require("chai").expect;
var ArrayFunctor     = require("../functors/array-functor");

describe("Array functor", function() {
	it("should create an array object", function() {
		arrayFunctor = ArrayFunctor.of(1,2,3,4);
		arrayFunctor.map();
	})
})