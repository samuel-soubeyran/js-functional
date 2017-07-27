var MaybeFunctor = function(value) {
	this.__value = value;
}

//Helper method
MaybeFunctor.prototype.isEmpty = function() {
  return (this.__value === null || this.__value === undefined);
};

MaybeFunctor.of = function(value) {
	return new MaybeFunctor(value);
}

/*
Behavior expected:
If there is a value, apply the function to it and return the new MaybeFunctor
If there is no value, return an empty MaybeFunctor
*/
MaybeFunctor.prototype.map = function(f) {
	// TODO
}


module.exports = MaybeFunctor;