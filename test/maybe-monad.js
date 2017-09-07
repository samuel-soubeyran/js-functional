var expect    = require("chai").expect;
var MaybeMonad     = require("../monads/maybe-monad");

describe("Maybe monad", function() {
  it("should create a non empty maybe monad object", function() {
    maybeMonad = MaybeMonad.of(1);
    expect(maybeMonad.isEmpty()).to.be.false;
  });

  it("should create an empty maybe functor", function() {
    maybeMonad = MaybeMonad.of(null);
    expect(maybeMonad.isEmpty()).to.be.true;
  });

  it("should implement bind for non empty Maybe", function() {
    maybeMonad = MaybeMonad.of(1).bind(
      function(x) { // Int -> Maybe(Int)
        return MaybeMonad.of(x + 3);
      }
    );
    expect(maybeMonad.isEmpty()).to.be.false;
    expect(maybeMonad.__value).to.equal(4);
  });

  it("should implement bind for empty Maybe", function() {
    maybeMonad = MaybeMonad.of(null).bind(
      function(x) {
        return MaybeMonad.of(x + 3);
      }
    );
    expect(maybeMonad.isEmpty()).to.be.true;
  });

  it("should allow chaining of bind for non empty Maybe", function() {
    maybeMonad = MaybeMonad.of(1)
    .bind(
      function(x) {
        return MaybeMonad.of(x + 3);
      })
    .bind(
      function(x) {
        return MaybeMonad.of(x * 2);
      }
    );
    expect(maybeMonad.isEmpty()).to.be.false;
    expect(maybeMonad.__value).to.equal(8);
  })


  it("should allow chaining of bind for empty Maybe", function() {
    maybeMonad = MaybeMonad.of(null)
    .bind(
      function(x) {
        return MaybeMonad.of(x + 3);
      })
    .bind(
      function(x) {
        return MaybeMonad.of(x * 2);
      }
    );
    expect(maybeMonad.isEmpty()).to.be.true;
  })
});