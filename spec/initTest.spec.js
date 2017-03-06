describe("BowlingGame", function(){
  var BowlingGame = require('../bowlingGame.js');

  describe("on initialization", function(){
  })
});


describe("Player", function(){
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