# unit-4-game

##Sith: Battle for Supremacy

**Sith: Battle for Supremacy** is a single-player game that simulates combat between famous Sith Lords from the Star Wars franchise. The end goal is for the player to defeat the opposing Sith Lords to claim dominance over the Sith.

The game is programmed using Javascript, and utilizes the JQuery library to facilitate the creation and modification of game elements that will appear to the player.

##Goal
The goal of the game is to defeat all opposing characters by bringing their HP to 0, without the player having their HP reach 0 first.

##How to Play

###Choose a Character
Players first select one of four character options to play as. When choosing a character, the player will see each character's name, image, and their three combat stats - Attack Power, Counter Power, and Hit Points. Clicking a character card will select that character, and the remaining options will become the opponents that the player must defeat.

###Choose an Opponent
After a player character has been selected, the remaining characters will move to the opponent pool. Clicking an opponent's character card will start a battle with that opponent.

###Battle
Once both player and opponent have been selected, combat will begin. The player attacks by pressing the "Attack" button at the bottom of the battle section. The player will reduce the opponents HP by the amount of their Attack Power, while simultaneously the opponent will reduce the player's HP by the amount of their Counter Power. Then the player's Attack Power will be increased by their starting Attack Power. The opponent's Counter Power will not change.

The damage done by each attack will be shown in the combat log, and the player and opponent cards will be updated to reflect changes in Attack Power and HP.

The battle will continue until one character's HP falls to 0 or below. If the player's HP reaches 0 first, the player loses the game. If the opponent's HP reaches 0 first, the player wins that round. If both character's HP reaches 0 in the same round, the player also loses, as they failed to overcome the opponent - do or do not, there is no tie.

###Winning a Round
If the player wins against an opponent, the opponent's card will disappear and the player will then select another opponent from the remaining options. The player's Attack Power and Hit Points will carry over between rounds, and there is no way to regain lost HP. The process of picking an opponent and eliminating them through battle will repeat until there are no opponents remaining after a round.

###Winning the Game
When no opponents are left, the player is victorious. The game will display a victory message. The player will be given a "Reset" button to play again from the beginning.

###Losing the Game
If the player's HP was reduced to 0 at any point, they lose. The game will display a defeat message. The player will be given a "Reset" button to play again from the beginning.

##Strategy
Each character has different combinations of the three combat stats and will usually excel in one area at the expense of another. Players must identify the correct order in which to fight opponents based on their chosen character's strengths and weaknesses. There is no random element to combat - the fights are completely deterministic - so success and failure are entirely based on player choices. The stats have been balanced such that each character is guaranteed to have at least one way to win and one way to lose.