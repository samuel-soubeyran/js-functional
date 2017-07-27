var ArrayFunctor = function(value) {
	this.__value = value;
}

// For example ArrayFunctor.of(1,2,3,4)
ArrayFunctor.of = function() {
	return new ArrayFunctor(Array.prototype.slice.call(arguments));
}

/*
Expected behavior: 
return a new array functor where each element
is the result of applying f on the element of the current array functor.
*/
ArrayFunctor.prototype.map = function(f) {
	// TODO
}

module.exports = ArrayFunctor;