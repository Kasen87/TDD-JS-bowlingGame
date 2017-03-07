function Frame(isFinalFrame){
  //Constructor
  this.pinCount = 10;
  this.attemptLimit = 2;
  if(isFinalFrame) { this.attemptLimit = 3; };
  this.missChance = 18;

  //Each pin variation modifies the miss chance for the frame
  var missChancePerPin = 6.4;

  //Implementation
  UpdateMissChance = function(){
    this.missChance = (missChancePerPin * this.pinCount);
  }
  //Interface
  this.adjustPins = function(number){
    this.pinCount += number;
    if (this.pinCount > 10) { this.pinCount = 10; };
    if (this.pinCount < 0) { this.pinCount = 0; };
    console.log(this.missChance);
  }

  this.resetPins = function(){
    this.pinCount = 10;
  }
}

module.exports = Frame;