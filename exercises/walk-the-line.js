var MaybeMonad     = require("../monads/maybe-monad");
var R = require('ramda');
/*  
A walker walk on a suspended line with a Pole for equilibrium.
Birds come on the pole (for the sake of simplicity they never leave once on the pole). They land either to the left end or the right end of the pole.
If at any time abs(leftBird - rightBird) > 3 then the walker falls 
*/
var Pole = function(leftBirds, rightBirds) {
  this.leftBirds = leftBirds;
  this.rightBirds = rightBirds;

}

//Return a new Pole with the new leftBirds = old leftBirds + birds
// Int, Polr -> Pole => Int -> Pole -> Pole
Pole.landLeft = R.curry(function(birds, pole) {
});

//Return a new Pole with the new rightBirds = old rightBirds + birds
Pole.landRight = R.curry(function(birds, pole) {

});

//Return a new MaybeMonad(Pole) with the new leftBirds = old leftBirds + birds if abs(leftBird - rightBird) < 3
// else return a MaybeMonad.of(null)
Pole.maybeLandLeft = R.curry(function(birds, pole) {

});

//Return a new MaybeMonad(Pole) with the new rightBirds = old rightBirds + birds if abs(leftBird - rightBird) < 3
// else return a MaybeMonad.of(null)
Pole.maybeLandRight = R.curry(function(birds, pole) {
  
});


module.exports = Pole;