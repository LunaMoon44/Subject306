//Create a Phaser game with dimensions 1300x610
var game = new Phaser.Game(1300, 610, Phaser.AUTO, 'game-world');

//Add the different games states
game.state.add('boot', bootState); //The function that starts running the game
game.state.add('load', loadState); //The function that loads all the assets into the game
game.state.add('menu', menuState); //The Function that brings up the menu to start the game
game.state.add('finalroom', finalroomState); //the function that loads the final puzzle room in the game
game.state.add('roomOne', roomStateOne); //the function that loads the first puzzleroom
game.state.add('roomtwo', roomStatetwo);
game.state.add('library', libraryState);
game.state.add('roomthree', roomthreeState);
game.state.add('splitroom', splitStateroom);
game.state.add('strengthroom', strengthStateroom);
game.state.add('knowledgeroom', knowledgeStateroom);
game.state.add('forest', forestState);
game.state.add('win', winState);
game.state.add('blank', blankState);
//Any game spanning variables/settings could be placed here
game.global = {
  lives: 3
};

//Load the boot state
game.state.start('boot');
