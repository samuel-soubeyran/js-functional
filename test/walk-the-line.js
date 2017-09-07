var expect = require("chai").expect;
var Pole = require("../exercises/walk-the-line");

describe("Pole", function() {
  it("should allow birds to land left", function() {
     var pole = new Pole(0,0);
     expect(Pole.landLeft(2, pole).leftBirds).to.equal(2);
   });
  it("should allow birds to land right", function() {
     var pole = new Pole(0,0);
     expect(Pole.landLeft(2, pole).leftBirds).to.equal(2);
  });

  it("shouldnt allow birds to reach a point where the walker falls", function() {
    var pole = new Pole(0,0);
    pole = Pole.landLeft(2, pole)
    pole = Pole.landRight(3, pole)
    pole = Pole.landLeft(5, pole)
    pole = Pole.landRight(4, pole); // at the end (7,7) but at some point (7,3) => walker falls ...
    expect(false); // fix the test;
  });

  it("should allow birds to land left", function() {
    var pole = new Pole(0,0);
    var maybePole = Pole.maybeLandLeft(2, pole);
    expect(maybePole.isEmpty()).to.be.false;
    expect(maybePole.__value.leftBirds).to.equal(2);
  });


  it("should allow birds to land right", function() {
    var pole = new Pole(0,0);
    var maybePole = Pole.maybeLandRight(3, pole);
    expect(maybePole.isEmpty()).to.be.false;
    expect(maybePole.__value.rightBirds).to.equal(3);
  });


  it("should allow birds to land right and left", function() {
    var pole = new Pole(0,0);
    var maybePole = Pole.maybeLandRight(3, pole).bind(Pole.maybeLandLeft(2));
    expect(maybePole.isEmpty()).to.be.false;
    expect(maybePole.__value.rightBirds).to.equal(3);
    expect(maybePole.__value.leftBirds).to.equal(2);
  });


  it("shouldnt allow birds to reach a point when the walker falls", function() {
    var pole = new Pole(0,0);
    var maybePole = Pole.maybeLandRight(3, pole).bind(Pole.maybeLandLeft(2)).bind(Pole.maybeLandRight(7));
    expect(maybePole.isEmpty()).to.be.true;
  });


});