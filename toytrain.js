function Toytrain( madeof, numberofwheels, funfactor ) {
  this.madeof = madeof;
  this.numberofwheels = numberofwheels;
  this.funfactor = funfactor;

  this.toString = function () {
    return "This train is made of " + this.madeof + ", has " + this.numberofwheels
            + " wheels, and has a fun factor of " + this.funfactor + ".";
  };
}

var brio = new Toytrain( "wood", 4, 8 );
var bullet = new Toytrain( "plastic", 4, 7 );

console.log( brio.toString() );
console.log( bullet.toString() );
