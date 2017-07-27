var ArrayFunctor = function(value) {
	this.__value =  value;
}

ArrayFunctor.of = function() {
	return new ArrayFunctor(Array.prototype.slice.call(arguments));
}

ArrayFunctor.prototype.map = function() {
	//Todo
}

module.exports = ArrayFunctor;