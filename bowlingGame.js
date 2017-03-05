function BowlingGame(players){
  var Player = require('./player.js');

  this.players = makePlayers(players);

  function makePlayers(players){
    return players.map(function(p){
      return new Player(p);
    })
  }

  this.pins = 10;

  this.bowl = function() {
    this.pins -= Math.floor(Math.random()*10 + 1);
    console.log(this.pins);
  }
}


module.exports = BowlingGame;