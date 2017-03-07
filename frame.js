function Frame(isFinalFrame){
  
  //Constructor
  var missChancePerPin = 6.4;
  var baseMissChance = 18;
  var maxPinCount = 10;

  this.pinCount = maxPinCount;
  this.missChance = baseMissChance;
  this.attemptLimit = 2;
  if(isFinalFrame) { this.attemptLimit = 3; };

  //Implementation
  /*var UpdateMissChance = function(){
      return baseMissChance + (missChancePerPin * (maxPinCount - this.pinCount));
  };
*/
  //Interface
  this.adjustPins = function(number){
    this.pinCount += number;
    if (this.pinCount > 10) { this.pinCount = 10; };
    if (this.pinCount < 0) { this.pinCount = 0; };
    this.missChance = 82 - (this.pinCount * missChancePerPin);
  }

  this.resetPins = function(){
    this.pinCount = 10;
  }
}

module.exports = Frame;