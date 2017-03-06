describe("A player", function(){
  var Player = require('../player.js');

  //On init of Player
  var playerName = "eleni";
  var player = new Player(playerName);
  
  //Should have name, score of 0, and a random chance to hit
  describe("A player is initialized", function(){
    it("and has a name", function(){
      expect(player.name).toEqual(playerName);
    })

    it("and has a score of zero", function(){
      expect(player.score).toEqual(0);
    })

    it("and has a 0% chance to hit pins", function(){
      expect(player.hitChance).toEqual(0);
    })
  })

  //Should manage their own scores
  describe("The player score", function(){
    var points = Math.floor(Math.random() * 10);
    var _score;

    beforeEach( function(){
      player.score = 10;
      _score = player.score;
    })

    it("should go up", function(){
      player.updateScore(points);
      expect(player.score).toEqual(_score + points);
    })
  
    it("should go down", function(){
      player.updateScore(-points);
      expect(player.score).toEqual(_score - points);
    })
    
    it("shouldn't go below 0", function(){
      player.updateScore(-1000);
      expect(player.score).not.toBeLessThan(0);
    })
    
    it("should reset to initial score of 0", function(){
      player.resetScore();
      expect(player.score).toEqual(0);
    })
  })
})


describe("A frame", function(){
  var Frame = require('../frame.js');

  //Create final frame
  var frame = new Frame(false);

  describe("is created and", function(){

    it("has 10 pins", function(){
      expect(frame.pinCount).toEqual(10);
    })

    it("has 2 parts if it's normal", function(){
      expect(frame.attemptLimit).toEqual(2);
    })

    it("has 3 parts if it's final", function(){
      let _frame = new Frame(true);
      expect(_frame.attemptLimit).toEqual(3);
    })

    it("has a 18% miss chance", function(){
      expect(frame.missChance).toEqual(18);
    })
  })
    
  describe("can adjust the pin count", function(){
    var _tempPinCount = 5;

    beforeEach(function(){
      frame.pinCount = _tempPinCount;
    })

    it("and increase it", function(){
      frame.adjustPins(3);
      expect(frame.pinCount).toEqual(_tempPinCount + 3);
    })

    it("and decrease it", function(){
      frame.adjustPins(-3);
      expect(frame.pinCount).toEqual(_tempPinCount - 3);
    })

    it("and stays below 11", function(){
      frame.adjustPins(124243);
      expect(frame.pinCount).toEqual(10);
    })

    it("and stays above -1", function(){
      frame.adjustPins(-1358);
      expect(frame.pinCount).toEqual(0);
    })

    it("to 10 if reset is called", function(){
      frame.resetPins();
      expect(frame.pinCount).toEqual(10);
    })
  })
    
  describe("has a miss chance and", function(){
    beforeEach( function(){
      frame.pinCount = 5;
    })

    it("increases as pin count goes down", function(){
      frame.adjustPins(-3)
      expect(frame.missChance).toEqual(30.8);
    })

    it("doesn't go above 82%", function(){
      frame.pinCount = 12;
      expect(frame.missChance).toBeLessThan(82);
      expect(frame.missChance).not.toBeLessThan(18);
    })

    it("decreases as pin count goes up", function(){
      frame.adjustPins(3);
      expect(frame.missChance).toEqual(69.2)
    })

    it("doesn't go below 18%", function(){
      frame.pinCount = -3;
      expect(frame.missChance).toBeGreaterThan(18);
      expect(frame.missChance).not.toBeGreaterThan(82);
    })
  })
});


xdescribe("BowlingGame", function(){
  var BowlingGame = require('../bowlingGame.js');

  describe("on initialization", function(){
  })
});