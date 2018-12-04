//Create a Phaser game with dimensions 1300x610
var game = new Phaser.Game(1300, 610, Phaser.AUTO, 'game-world');

//Add the different games states
game.state.add('boot', bootState); //The function that starts running the game
game.state.add('load', loadState); //The function that loads all the assets into the game
game.state.add('menu', menuState); //The Function that brings up the menu to start the game
game.state.add('finalroom', finalroomState); //the function that loads the final puzzle room in the game
game.state.add('roomOne', roomStateOne); //the function that loads the first puzzleroom
game.state.add('roomtwo', roomStatetwo); //the function that loads the second puzzle room
game.state.add('library', libraryState); //the function that loads the library room
game.state.add('roomthree', roomthreeState); //the function that loads the third puzzle room
game.state.add('splitroom', splitStateroom); //the function that loads the split room
game.state.add('strengthroom', strengthStateroom); //the function that loads the strength room
game.state.add('knowledgeroom', knowledgeStateroom); //the function that loads the knowledge room
game.state.add('forest', forestState); //the function that loads the forest room
game.state.add('win', winState); //the function that loads the win page
game.state.add('blank', blankState); //the function that loads the blank page room

game.global = {
  lives: 3
};

//Load the boot state
game.state.start('boot');
