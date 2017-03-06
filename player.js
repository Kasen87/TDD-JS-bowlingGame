function Player(name){
  //Initialize Player stats
  this.name = name;
  this.score = 0;
  this.hitChance = 0;

  this.updateScore = function(points){
    let _newScore = this.score + points;
    if (_newScore < 0) { _newScore = 0; };
    this.score = _newScore;
  }

  this.resetScore = function(){
    this.score = 0;
  }
}

module.exports = Player;