# Learning Test-Driven Development with Jasmine & Node
---
This project is my first introduction into TDD processes thanks to Eleni. 

The vague goal is to build a simple bowling game that will ask for up to four players and then process their turns for them to determine a *random* victor.

## Current File Progress
- *bowlingGame.js* _(in-progress)_
  - Test for Successful Init
  - Test for Successful Bowl Action
- *player.js* _(in-progress)_
  - Test for successful Init
  - Test for successful score change
- *More Objects?*


## Real-Life Models
- To set-up a bowling game, you must:
  - have at least one player with a name
  - make sure every player has a starting score of 0
  - setup the initial count of pins (10 in this case)
  - start all players on the first frame of the game
  - determine the turn order for all players (random for now)
- To perform a bowling action, you must:
  - know who's turn it is to bowl
  - know which frame the player is acting on
  - know which part of the frame the player is acting upon (1/2/3*)
  - know how many pins are available to knock down
- To process turns within the game, you need to:
  - Select the upcoming player
  - Select the upcoming frame & frame-part
  - Perform the bowl action for the player
    - Repeat until either all the pins are knocked down or until frame-part has reached it's max value (2-3 right now)
  - Update the player's score value based on the results of bowling
  - _Repeat above until end of game is reached_


## Object Models (initial idea)
- BowlingGame has:
  
  - Game Rules
    - max frames
    - max players
    - max total score for game
  
  - Players
    - have names
    - have scores
    - have a chance to hit pins (random)

  - Turn Order

  - Frames
    - have parts
    - have pins
    - have a chance to miss value (depends on remaining pin count)
  
  - Pins
    - have a worth
  
  - A Bowling Action
  
  - Score Processing
    - has a modifier value for a spare
    - has a modifier value for a strike
    - has a modifier value for multiple strikes on final frame-parts