describe("BowlingGame", function(){
  var BowlingGame = require('../bowlingGame.js');

  var players = ["eleni", "josh"];
  var game = new BowlingGame(players);

  describe("on initialization", function(){
    it("should have player objects", function(){
      expect(game.players[0].name).toEqual("eleni");
    })

    it("should have 10 pins", function(){
      expect(game.pins).toEqual(10);
    })
  })

  describe("on bowl action", function(){
    it("should change pin value", function(){
      var oldPins = game.pins;
      game.bowl();
      expect(oldPins).toBeLessThan(11);
      expect(oldPins).toBeGreaterThan(0);
    })
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

    it("and has a random chance to hit pins", function(){
      expect(player.hitChance).toBeLessThan(1.1);
      expect(player.hitChance).toBeGreaterThan(-0.1);
    })
  })

  //Should manage their own scores
  describe("The player score", function(){
    var points = 1;
    var score = player.score;

    beforeEach( function(){
      _score = score;
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
      expect(player.name).toEqual(playerName);
    })
  })
})





/*Scratch Section

it("should have players", function(){
      expect(game.players).toEqual(players);
    });


var thisGame = new BowlingGame(["eleni", "josh"]);
console.log(thisGame.players);
console.log(thisGame.players[0]);
console.log(thisGame.players[0].name);

*/