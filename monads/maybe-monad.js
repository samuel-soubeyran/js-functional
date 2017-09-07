var MaybeMonad = function(value) {
  this.__value = value;
}

//Helper method
MaybeMonad.prototype.isEmpty = function() {
  return (this.__value === null || this.__value === undefined);
};

MaybeMonad.of = function(value) {
  return new MaybeMonad(value);
}
MaybeMonad.prototype.map = function(f) {
  // TODO
  if (this.isEmpty()) {
    return new MaybeMonad(null);
  } else {
    return new MaybeMonad(f(this.__value));
  }
}

/*
Behavior expected:
If there is a value, apply the function to it and return the new MaybeMonad produced by f
If there is no value, return an empty MaybeMonad
*/
MaybeMonad.prototype.bind = function(f) {
}



module.exports = MaybeMonad;